import logo from "./logo.svg";
import "./App.css";
import StudyBrowser from "./StudyBrowser.js";
require('dotenv').config()

function App() {
	return (
		<div className="App">
			<StudyBrowser />
		</div>
	);
}

export default App;
