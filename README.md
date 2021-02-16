# Travel planner

## Overview
Since many real-world applications do not rely on only a single source of data this app pulls in multiple types of data, from different sources, first it is obtained the trip destination and departing date from the user,  then it will display forecast weather along with an image of the location using that data received from external APIs.

## About the Project
The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. we used the Weatherbit API in order to get the forecast weather. But Weatherbit API only takes in coordinates for weather data. So, we needed to get those coordinates from the Geonames API. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API, additionally, we used the RestCountries API to display the national flag of the country.

## Built tools
* [HTML]
* [CSS]
* [JavaScript]
* [Webpack]- Asset Management
* [Babel]- JavaScript Compiler
* [Sass] - The web framework used
* [Node.js]- JavaScript Runtime
* [Express.js]- Server Framework for Node.js
* [Jest] - Testing suit
* [Service-Workers]- For offline capability

## Getting Started

1. Clone into repo:
```
$ https://github.com/marasal/travel-planner.git
```
2. Install the dependencies
```
npm install
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```

