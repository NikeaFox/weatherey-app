import "./App.scss";
import Header from "./components/Header/Header";
import Illustration from "./images/mainIllustration.svg"
function App() {
	return (
		<div className='App'>
			<Header />
			<img className="App__image" src={Illustration} alt="" />
		</div>
	);
}

export default App;
