import logo from "./logo.svg";
import "./App.css";
import StudyBrowser from "./StudyBrowser.js";
import SidePanel from "./SidePanel.js";
require('dotenv').config()

function App() {
	return (
		<div className="App">
          <SidePanel>
				<StudyBrowser />
        </SidePanel>
			
		</div>
	);
}

export default App;
