import React from 'react';

const Result = props => {
    const {city, temp, pressure, sunrise, sunset, time, wind, err} = props.results;

    let content = null;

    

    if (!err && city) {
        const sunRise = new Date(sunrise * 1000).toLocaleTimeString();
        const sunSet = new Date(sunset * 1000).toLocaleTimeString();
        content = (
        <>
        <h2>Pogoda dla miasta: </h2>
        <h3>{city}</h3>
        <p>Na dzień i godzinę: {time}</p>
        <p>Temperatura: {temp} &deg;C</p>
        <p>Ciśnienie: {pressure} hPa</p>
        <p>Prędkość wiatru: {wind} m/s</p>
        <p>Wschód słońca: {sunRise}</p>
        <p>Zachód słońca: {sunSet}</p>
        </>
        )
    }
    return (
    <>
    
    {err? `Podanego miasta ${city} nie ma w bazie danych` : content}
    
    </>
    )
}

export default Result