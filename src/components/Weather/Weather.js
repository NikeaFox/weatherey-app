import React from "react";
import "./Weather.scss";
export const Weather = (props) => {
	const { weatherData, location, forecast, checkedWeather } = props;

	return (
		<React.Fragment>
			{checkedWeather === false ? (
				<div className="nothing"></div>
			) : (
				<div className='weather'>
					<p className='weather__cityName'>{location.name}, {location.country}</p>
					<div className='weather__informations'>
						<div className='weather__informations-wrapper'>
							<img src={weatherData.condition.icon} alt='' />
							<div className='weather__temperature'>
								<p>{weatherData.temp_c}°</p>
								<div className='weather__temperature__feeling'>
									<span>feeling:</span>
									<span>
										<b>{weatherData.feelslike_c}°</b>
									</span>
								</div>
							</div>
						</div>
						<div className='weather__details'>
							<div className='weather__details__information'>
								<span>
									<b>Wind:</b>
								</span>
								<span>
									<b>
										{weatherData.wind_dir} {weatherData.wind_kph}
									</b>
									km/h
								</span>
							</div>
							<div className='weather__details__information'>
								<span>
									<b>Pressure:</b>
								</span>
								<span>
									<b>{weatherData.pressure_mb}</b> mbar
								</span>
							</div>
							<div className='weather__details__information'>
								<span>
									<b>Humidity:</b>
								</span>
								<span>
									<b>{weatherData.humidity}</b> %
								</span>
							</div>
							<div className='weather__details__information'>
								<span>
									<b>Rain Chance:</b>
								</span>
								<span>
									<b>{forecast.forecastday[0].day.daily_chance_of_rain}</b> %
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
export default Weather;
