import Descriptions from "./components/Descriptions";

const makeIconURL = (iconId) =>`http://openweathermap.org/img/wn/${iconId}@2x.png`

const API_KEY='00e4bb6c3e3fca533d80ccbc1cbd3784'


const getFormattedWeatherData = async(city, units='metric') =>{
    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) =>res.json())
    .then((data) => data);

    const{
        weather , 
        main:{temp, feels_like, temp_min,temp_max , pressure, humidity} ,
        wind :{speed},
        sys : {country,sunrise,sunset},
        name,}= data;

        const {description , icon} = weather[0]

        return{
            description,
            iconURL : makeIconURL(icon),
            temp_max,
            temp,
            temp_min,feels_like,
            country,
            sunrise,
            sunset,
            pressure,
            humidity,
            speed,
            name
        };
};

export {getFormattedWeatherData}