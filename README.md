# Stranger Things API

<img 
  src="/public/assets/st_api_logo.jpg"
  alt="Stranger Things API"
  width="150"
  height="150"
/>

| [Home](http://stranger-things-api.mridul.tech/) | [Docs](https://rapidapi.com/Mridul2820/api/stranger-things-character-api) |
| ---- | ---- |

## Base API URL
```
API_URL - https://stranger-things-character-api.p.rapidapi.com
```
## API KEY
Get a [API Key](https://rapidapi.com/Mridul2820/api/stranger-things-character-api)


## Get All Characters Example
```jsx
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://stranger-things-character-api.p.rapidapi.com/characters',
  params: {limit: '5', skip: '10'},
  headers: {
    'X-RapidAPI-Key': <YOUR_API_KEY>,
    'X-RapidAPI-Host': 'stranger-things-character-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```


## Get a Single Character Example
```jsx
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://stranger-things-character-api.p.rapidapi.com/characters/68',
  headers: {
    'X-RapidAPI-Key': <YOUR_API_KEY>,
    'X-RapidAPI-Host': 'stranger-things-character-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```
