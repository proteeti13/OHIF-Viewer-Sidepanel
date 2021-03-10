import React from "react";
import PropTypes from "prop-types";
import { Thumbnail } from "./Thumbnail.js";
import "./StudyBrowser.styl";

function StudyBrowser(props) {
	const {
		// 	studies,
		onThumbnailClick,
		onThumbnailDoubleClick,
		supportsDrag,
	} = props;

	const studies = [
		{
			StudyInstanceUID: "1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1",
			thumbnails: [
				{
					imageId:
						"wadors:https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs/studies/1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1/series/1.3.6.1.4.1.25403.345050719074.3824.20170125113608.5/instances/1.3.6.1.4.1.25403.345050719074.3824.20170125113608.6/frames/1",
					displaySetInstanceUID: "7fb02d96-8806-0ecf-5fd2-5d0f9c74dfd4",
					SeriesDescription: "Topogram  0.6  T80s",
					InstanceNumber: 1,
					numImageFrames: 1,
					SeriesNumber: 1,
					stackPercentComplete: 0,
				},
				{
					imageId:
						"wadors:https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs/studies/1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1/series/1.3.6.1.4.1.25403.345050719074.3824.20170125113608.4/instances/1.3.6.1.4.1.25403.345050719074.3824.20170125113420.3/frames/1",
					displaySetInstanceUID: "27844772-1a3e-eec4-ccd3-7587f43b0a83",
					SeriesDescription: "Topogram  0.6  T80s",
					InstanceNumber: 1,
					numImageFrames: 1,
					SeriesNumber: 2,
					stackPercentComplete: 0,
				},
				{
					imageId:
						"wadors:https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs/studies/1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1/series/1.3.6.1.4.1.25403.345050719074.3824.20170125113545.4/instances/1.3.6.1.4.1.25403.345050719074.3824.20170125113556.3/frames/1",
					displaySetInstanceUID: "e37f715c-64f7-2036-fb79-cac592118a9b",
					SeriesDescription: "CT WB 5.0  B35f",
					InstanceNumber: 1,
					numImageFrames: 174,
					SeriesNumber: 4,
					stackPercentComplete: 0,
				},
				{
					imageId:
						"wadors:https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs/studies/1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1/series/1.3.6.1.4.1.25403.345050719074.3824.20170125113420.1/instances/1.3.6.1.4.1.25403.345050719074.3824.20170125113448.2/frames/1",
					displaySetInstanceUID: "0f49d504-7a71-9226-58c6-ad96cbc5552e",
					SeriesDescription: "CT Nk/Ch/Abd I+  2.0  B31f",
					InstanceNumber: 1,
					numImageFrames: 394,
					SeriesNumber: 6,
					stackPercentComplete: 0,
				},
				{
					imageId:
						"wadors:https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs/studies/1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1/series/1.3.6.1.4.1.25403.345050719074.3824.20170125113529.13/instances/1.3.6.1.4.1.25403.345050719074.3824.20170125113538.4/frames/1",
					displaySetInstanceUID: "4bd91d1d-e0a7-7dee-34a2-430f431db808",
					SeriesDescription: "PET WB Corrected",
					InstanceNumber: 1,
					numImageFrames: 174,
					SeriesNumber: 103,
					stackPercentComplete: 0,
				},
				{
					imageId:
						"wadors:https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs/studies/1.3.6.1.4.1.25403.345050719074.3824.20170125113417.1/series/1.3.6.1.4.1.25403.345050719074.3824.20170125113514.6/instances/1.3.6.1.4.1.25403.345050719074.3824.20170125113522.6/frames/1",
					displaySetInstanceUID: "c2ae17a0-af7d-9495-840d-f4c842f66ccf",
					SeriesDescription: "PET WB Uncorrected",
					InstanceNumber: 1,
					numImageFrames: 174,
					SeriesNumber: 104,
					stackPercentComplete: 0,
				},
				{
					altImageText: "SR",
					displaySetInstanceUID: "c80d1d2a-83b7-f60f-11ec-805fd551f6ac",
					SeriesDescription: "Research Derived series",
					SeriesNumber: 99,
					stackPercentComplete: 0,
				},
				{
					altImageText: "SR",
					displaySetInstanceUID: "5d235118-6e53-e1b4-a59a-3baf9b74289d",
					SeriesDescription: "Research Derived series",
					SeriesNumber: 99,
					stackPercentComplete: 0,
				},
				{
					altImageText: "SR",
					displaySetInstanceUID: "2539f8d9-9763-dd2f-8c22-5f1937847988",
					SeriesDescription: "Research Derived series",
					SeriesNumber: 99,
					stackPercentComplete: 0,
				},
				{
					altImageText: "SR",
					displaySetInstanceUID: "726dd574-3e37-e1f1-9451-99c40d97cb30",
					SeriesDescription: "Lower Right Something",
					SeriesNumber: 4701,
					stackPercentComplete: 0,
				},
				{
					altImageText: "SR",
					displaySetInstanceUID: "5094e4be-a891-114a-b38f-1e55a194c0ae",
					SeriesDescription: "Erik test",
					SeriesNumber: 4702,
					stackPercentComplete: 0,
				},
				{
					altImageText: "SR",
					displaySetInstanceUID: "0b60cbda-ed6f-17d8-85ef-6f2a75638779",
					SeriesDescription: "kk",
					SeriesNumber: 4703,
					stackPercentComplete: 0,
				},
			],
		},
	];

	return (
		<div className="study-browser">
			<div className="scrollable-study-thumbnails">
				{studies
					.map((study, studyIndex) => {
						const { StudyInstanceUID } = study;
						return study.thumbnails.map((thumb, thumbIndex) => {
							// TODO: Thumb has more props than we care about?
							const {
								altImageText,
								displaySetInstanceUID,
								imageId,
								InstanceNumber,
								numImageFrames,
								SeriesDescription,
								SeriesNumber,
								stackPercentComplete,
							} = thumb;

							return (
								<div
									key={thumb.displaySetInstanceUID}
									className="thumbnail-container"
									data-cy="thumbnail-list"
								>
									<Thumbnail
										supportsDrag={supportsDrag}
										key={`${studyIndex}_${thumbIndex}`}
										id={`${studyIndex}_${thumbIndex}`} // Unused?
										// Study
										StudyInstanceUID={StudyInstanceUID} // used by drop
										// Thumb
										altImageText={altImageText}
										imageId={imageId}
										InstanceNumber={InstanceNumber}
										displaySetInstanceUID={displaySetInstanceUID} // used by drop
										numImageFrames={numImageFrames}
										SeriesDescription={SeriesDescription}
										SeriesNumber={SeriesNumber}
										stackPercentComplete={stackPercentComplete}
										// Events
										onClick={onThumbnailClick.bind(
											undefined,
											displaySetInstanceUID
										)}
										onDoubleClick={onThumbnailDoubleClick}
									/>
								</div>
							);
						});
					})
					.flat()}
			</div>
		</div>
	);
}

const noop = () => {};

// StudyBrowser.propTypes = {
//   studies: PropTypes.arrayOf(
//     PropTypes.shape({
//       StudyInstanceUID: PropTypes.string.isRequired,
//       thumbnails: PropTypes.arrayOf(
//         PropTypes.shape({
//           altImageText: PropTypes.string,
//           displaySetInstanceUID: PropTypes.string.isRequired,
//           imageId: PropTypes.string,
//           InstanceNumber: PropTypes.number,
//           numImageFrames: PropTypes.number,
//           SeriesDescription: PropTypes.string,
//           SeriesNumber: PropTypes.number,
//           stackPercentComplete: PropTypes.number,
//         })
//       ),
//     })
//   ).isRequired,
//   supportsDrag: PropTypes.bool,
//   onThumbnailClick: PropTypes.func,
//   onThumbnailDoubleClick: PropTypes.func,
// };

StudyBrowser.propTypes = {
	studies: PropTypes.arrayOf(
		PropTypes.shape({
			StudyInstanceUID: PropTypes.string,
			thumbnails: PropTypes.arrayOf(
				PropTypes.shape({
					altImageText: PropTypes.string,
					displaySetInstanceUID: PropTypes.string,
					imageId: PropTypes.string,
					InstanceNumber: PropTypes.number,
					numImageFrames: PropTypes.number,
					SeriesDescription: PropTypes.string,
					SeriesNumber: PropTypes.number,
					stackPercentComplete: PropTypes.number,
				})
			),
		})
	),
	supportsDrag: PropTypes.bool,
	onThumbnailClick: PropTypes.func,
	onThumbnailDoubleClick: PropTypes.func,
};

StudyBrowser.defaultProps = {
	studies: [],
	supportsDrag: true,
	onThumbnailClick: noop,
	onThumbnailDoubleClick: noop,
};

export default StudyBrowser;
