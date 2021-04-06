import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OHIF, { MODULE_TYPES, DICOMSR } from '@ohif/core';
import logo from "./logo.svg";
import "./App.css";
import StudyBrowser from "./StudyBrowser.js";
import ConnectedStudyBrowser from './ConnectedStudyBrowser.js';
import SidePanel from "./SidePanel.js";
import { ReconstructionIssues } from './core/src/enums.js';
require('dotenv').config()


class App extends React.Component {
	static propTypes = {
		studies: PropTypes.arrayOf(
			PropTypes.shape({
				StudyInstanceUID: PropTypes.string.isRequired,
				StudyDate: PropTypes.string,
				PatientID: PropTypes.string,
				displaySets: PropTypes.arrayOf(
					PropTypes.shape({
						displaySetInstanceUID: PropTypes.string.isRequired,
						SeriesDescription: PropTypes.string,
						SeriesNumber: PropTypes.number,
						InstanceNumber: PropTypes.number,
						numImageFrames: PropTypes.number,
						Modality: PropTypes.string.isRequired,
						images: PropTypes.arrayOf(
							PropTypes.shape({
								getImageId: PropTypes.func.isRequired,
							})
						),
					})
				),
			})
		),
		studyInstanceUIDs: PropTypes.array,
		activeServer: PropTypes.shape({
			type: PropTypes.string,
			wadoRoot: PropTypes.string,
		}),
		onTimepointsUpdated: PropTypes.func,
		onMeasurementsUpdated: PropTypes.func,
		// window.store.getState().viewports.viewportSpecificData
		viewports: PropTypes.object,
		// window.store.getState().viewports.activeViewportIndex
		activeViewportIndex: PropTypes.number,
		isStudyLoaded: PropTypes.bool,
		dialog: PropTypes.object,
	};

	constructor(props) {
		super(props);

		this.state = {
			thumbnails: []
		}
	}

	componentDidMount() {

		const { studies, isStudyLoaded } = this.props;
		const { TimepointApi, MeasurementApi } = OHIF.measurements;
		const currentTimepointId = 'TimepointId';

		const timepointApi = new TimepointApi(currentTimepointId, {
			onTimepointsUpdated: this.onTimepointsUpdated,
		});

		const measurementApi = new MeasurementApi(timepointApi, {
			onMeasurementsUpdated: this.onMeasurementsUpdated,
		});

		this.currentTimepointId = currentTimepointId;
		this.timepointApi = timepointApi;
		this.measurementApi = measurementApi;

		if (studies) {
			const PatientID = studies[0] && studies[0].PatientID;

			// timepointApi.retrieveTimepoints({ PatientID });
			if (isStudyLoaded) {
				this.measurementApi.retrieveMeasurements(PatientID, [
					currentTimepointId,
				]);
			}

			this.setState({
				thumbnails: _mapStudiesToThumbnails(studies),
			});
		}


	}

	componentDidUpdate(prevProps) {
		const { studies, isStudyLoaded } = this.props;

		if (studies !== prevProps.studies) {
			this.setState({
				thumbnails: _mapStudiesToThumbnails(studies),
			});
		}
		if (isStudyLoaded && isStudyLoaded !== prevProps.isStudyLoaded) {
			const PatientID = studies[0] && studies[0].PatientID;
			const { currentTimepointId } = this;

			// this.timepointApi.retrieveTimepoints({ PatientID });
			this.measurementApi.retrieveMeasurements(PatientID, [currentTimepointId]);
		}
	}

	render() {
		console.log("I am from render", this.props.studies)
		return (<div className="App">
			<SidePanel from="left" isOpen={true}>
				<ConnectedStudyBrowser
					studies={this.state.thumbnails}
					studyMetadata={this.props.studies}
				/>

			</SidePanel>
		</div>);
	}
}


export default App;



const _checkForSeriesInconsistencesWarnings = async function (displaySet) {
	// NOTE: at the moment this function is async even if it does not perfom any heavy calculation.
	//       We may add or move here some of the computations
	//       done when creating the displaySet (see makeDisplaySet and isDisplaySetReconstructable).
	//       the thumbnail footnotes warning react element is already set up to handle a promise.
	const warningsList = [];
	if (displaySet.warningIssues && displaySet.warningIssues.length !== 0) {
		displaySet.warningIssues.forEach(warning => {
			switch (warning) {
				case ReconstructionIssues.DATASET_4D:
					warningsList.push("The dataset is 4D.");
					break;
				case ReconstructionIssues.VARYING_IMAGESDIMENSIONS:
					warningsList.push("The dataset frames have different dimensions (rows, columns).");
					break;
				case ReconstructionIssues.VARYING_IMAGESCOMPONENTS:
					warningsList.push("The dataset frames have different components (Sample per pixel).");
					break;
				case ReconstructionIssues.VARYING_IMAGESORIENTATION:
					warningsList.push("The dataset frames have different orientation.");
					break;
				case ReconstructionIssues.IRREGULAR_SPACING:
					warningsList.push("The dataset frames have different pixel spacing.");
					break;
				case ReconstructionIssues.MULTIFFRAMES:
					warningsList.push("The dataset is a multiframes.");
					break;
				default:
					break;
			}
		});
		warningsList.push('The datasets is not a reconstructable 3D volume. MPR mode is not available.');
	}

	if (displaySet.missingFrames &&
		(!displaySet.warningIssues ||
			(displaySet.warningIssues && !displaySet.warningIssues.find(warn => warn === ReconstructionIssues.DATASET_4D)))) {
		warningsList.push('The datasets is missing frames: ' + displaySet.missingFrames + '.');
	}

	return warningsList
}


const _mapStudiesToThumbnails = function (studies) {
	return studies.map(study => {
		const { StudyInstanceUID } = study;

		const thumbnails = study.displaySets.map(displaySet => {
			const {
				displaySetInstanceUID,
				SeriesDescription,
				InstanceNumber,
				numImageFrames,
				SeriesNumber,
			} = displaySet;

			let imageId;
			let altImageText;

			if (displaySet.Modality && displaySet.Modality === 'SEG') {
				// TODO: We want to replace this with a thumbnail showing
				// the segmentation map on the image, but this is easier
				// and better than what we have right now.
				altImageText = 'SEG';
			} else if (displaySet.images && displaySet.images.length) {
				const imageIndex = Math.floor(displaySet.images.length / 2);

				imageId = displaySet.images[imageIndex].getImageId();
			} else {
				altImageText = displaySet.Modality ? displaySet.Modality : 'UN';
			}

			const hasWarnings = _checkForSeriesInconsistencesWarnings(displaySet)
			console.log("I am warning from viewer", hasWarnings);

			return {
				imageId,
				altImageText,
				displaySetInstanceUID,
				SeriesDescription,
				InstanceNumber,
				numImageFrames,
				SeriesNumber,
				hasWarnings,
			};
		});

		return {
			StudyInstanceUID,
			thumbnails,
		};
	});
};
