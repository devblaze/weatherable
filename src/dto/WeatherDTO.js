export const WeatherDTO = (data) => ({
    icon: data.weather[0].icon,
    temperature: data.main.temp.toFixed(1),
    description: data.weather[0].main,
    location: `${data.name}, ${data.sys.country}`,
    coords: `${data.coord.lat.toFixed(4)}° N, ${data.coord.lon.toFixed(4)}° W`,
});
