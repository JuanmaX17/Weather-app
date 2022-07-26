import axios from 'axios';

const options = {
  method: 'GET',
  apiKey: '576e5cdb865ee71e895272356054b631',
  limitLocation: 1,
  lat: null,
  lon: null,
  urlWheater: function() {return `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`}, /* eslint-disable-line */
  optionsSearches: {
    apiKey: 'TorepQVmDimKBzIvkffi',
    input: 'sabaneta',
    urlSearches: function() {return `https://api.maptiler.com/geocoding/${this.input}.json?key=${this.apiKey}`} /* eslint-disable-line */
  },
};

export async function getWhater({ lat, lon, place }) {
  options.lat = lat;
  options.lon = lon;
  console.log('lat', options.lat);
  const info = (await axios.get(options.urlWheater())).data;
  console.log('datasss', info);
  info.main.temp = parseInt(info.main.temp - 273, 10);
  info.place = place;
  return info;
}

export async function getSearches(input) {
  options.optionsSearches.input = input;
  const res = await axios.get(options.optionsSearches.urlSearches());
  return res.data;
}
