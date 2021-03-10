// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ######################################################## //


/** UTILS */
import utils from './src/utils';
export { utils };

/** CONTEXT/HOOKS */
export {
  ModalProvider,
  ModalConsumer,
  useModal,
  withModal,
} from './src/contextProviders';

/** COMPONENTS */
export {
  Button,
  ButtonGroup,
  DateRange,
  EmptyStudies,
  Icon,
  IconButton,
  Input,
  InputDateRange,
  InputGroup,
  InputLabelWrapper,
  InputMultiSelect,
  InputText,
  Label,
  NavBar,
  Select,
  SidePanel,
  StudyBrowser,
  StudyItem,
  StudyListExpandedRow,
  StudyListPagination,
  StudyListTable,
  Svg,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeWrapper,
  Thumbnail,
  ThumbnailSR,
  ThumbnailList,
  Typography,
} from './src/components';

/** VIEWS */
export { StudyList, Viewer } from './src/views';