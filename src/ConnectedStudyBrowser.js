import OHIF from '@ohif/core';
import { connect } from 'react-redux';
import { StudyBrowser } from '@ohif/ui';
import cloneDeep from 'lodash.clonedeep';
import findDisplaySetByUID from './findDisplaySetByUID';

const { studyMetadataManager } = OHIF.utils;

const { setActiveViewportSpecificData } = OHIF.redux.actions;


const mapStateToProps = (state, ownProps) => {

};

const ConnectedStudyBrowser = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyBrowser);

export default ConnectedStudyBrowser;
