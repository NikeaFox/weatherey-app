import React, {  useState } from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import Weather from "../Weather/Weather";

const Header = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState("");
	const [forecast, setForecast] = useState("");
	const [querry, setQuerry] = useState("Istanbul");
	const [checkedWeather, setCheckedWeather] = useState(false);
	const [data, setData] = useState({});
	const getWeather = async (e) => {
		try {
			e.preventDefault();
			const raw = await fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=d9f6703bbd114de1830162741212808 &q=${querry}&days=1&aqi=no&alerts=no`
			);

			const weather = await raw.json();

			setData(weather);
			setWeatherData(weather.current);
			setLocation(weather.location);
			setForecast(weather.forecast);
			setQuerry("");
			setCheckedWeather(true);
		} catch (err) {
			switch (data.error.code) {
				case 1003:
					alert("Enter A Location");
					break;
				case 1006:
					alert("No Location Found");
					break;
				default:
			}
		}
	};

	return (
		<div className='homepage'>
			<div className='header'>
				<h1 className='header__text'>WEATHEREY</h1>
				<form action='' className='header__search'>
					<input
						placeholder='Search Location'
						type='text'
						value={querry}
						onChange={(e) => setQuerry(e.target.value)}
					/>
					<button onClick={getWeather} className='header__searchBar_btn'>
						<SearchIcon />
					</button>
				</form>
			</div>
			<Weather
				weatherData={weatherData}
				location={location}
				forecast={forecast}
				checkedWeather={checkedWeather}

			/>
		</div>
	);
};

export default Header;
