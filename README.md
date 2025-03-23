# Weather App

## How to run

This weather app SPA makes use of the free OpenWeatherMap API. To use this app:

1.) Clone the repo to your local machine

2.) Run npm install to install dependencies

3.) Go to [OpenWeatherMap](https://openweathermap.org/) and create a free account.

4.) In your dashboard, go to the API Keys section and create your key. Copy this.

5.) In the repo, create a file named `.env` at the root folder. Copy over:

VITE_APP_OPENWEATHER_API_KEY = ""

And inside the "" paste your API key.

6.) Type npm run dev into the terminal to start running the app.

## About the app

### Design

My weather app SPA has been designed with a cute and cartoony pastel palette. A toggle allows the user to switch between light and dark mode.

![toggling between light and dark mode](./public/images/readme/light-dark.gif)

### Home Page

The homepage provides details about the current weather in the selected city, as well as a 24 hour and 5 day basic forecast. Hovering over the circular window on the home page displays a weather image according to the current weather e.g. cloudy, thunderstorms etc.

![home page in light mode](./public/images/readme/image.png)

![background showing cloudy day](./public/images/readme/image-3.png)

### Detailed Forecast Page

The next tab along navigates to a detailed forecast page, where users can see a three-hourly detailed forecast for the next 5 days.

![detailed forecast page in light mode](./public/images/readme/image-1.png)

### City Search

The user can search for a city to find the current weather and forecast for that city. Times and dates are local time of the city selected. The city is remembered when navigating between the home and detailed forecast pages. Refreshing or starting a new session resets the city back to the default, which for the sake of this project is set to 'London'. However, future improvements could allow the user to set up a profile and choose their own 'home' city to default to.

![searching for a city](./public/images/readme/searchCity.gif)

### Responsive Design

This app has been developed to be viewed on desktop or mobile or tablet devices. Responsive design principles have been used to ensure the app is accessible on different devices such as media queries and relative sizes. For smaller screens, a horizontal scroll has been implemented for the forecast components.

![scrolling on mobile](./public/images/readme/scrollMobile.gif)

### State Management

Redux and Redux Toolkit has been used to track state across the app. The theme (light or dark mode) as well as the current city being viewed is stored in the redux store. This was implemented to ensure a single point of truth and so that this could be accessed throughout the app without the need for prop drilling.

### Performance

The weather information is consumed from the free tier of the OpenWeatherMap API using both the current weather and five day forecast endpoints.

The OpenWeatherMap Geocode API returns city suggestions when the user types so the user can choose from a list of cities. Only when a valid city from the list has been chosen will the call to the weather/forecast endpoints be made. This reduces redundant calls containing invalid city names.

This also minimises the issue of the user inputting a city then getting the weather for a city with the same name in another part of the world (e.g. Birmingham, Uk and Birmingham, Alabama). The user can clearly see the city, state and country name when making a selection, and the weather/forecast endpoints are now called using the latitude and longitude instead of just the city name, ensuring better accuracy. Furthermore, searching by city name has been deprecated on the OpenWeatherMap API so switching to this method now ensures support with future updates.

It is, of course, important to consider the large number of API calls being made to the geocode endpoint when the suggestions are being generated. Consequently, the endpoint is only called when the input is at least 3 characters long.

React query is used to cache data of the current and weather forecasts for the cities searched for. This has been implemented to improve performance and reduce unnecessary repeated API calls. The location is added to the query key, so information is cached for each city searched for. The staletime is currently 1 hour. This seemed reasonable to avoid excessive calls while keeping the 3-hourly forecast reasonably up to date.

### Accessibility

To work towards my app being accessible for everyone to use, I have added image alt texts, aria attributes and roles to my elements.

I have added axe tests to test for violations on both pages. I have also used the colour contrast checker.

## Process

A simple trello board was used to manage and prioritize tasks. With a limited time to complete the project, it was important to focus on the MVP.

![trello board](./public/images/readme/image-7.png)

A very basic figma wireframe was created at the ideation stage. While changes were later made to design, this initial stage helped to direct the development process e.g. prioritizing tasks, identifying common components.

![figma](./public/images/readme/image-8.png)

## Future Improvements

I hope to add additional features in future such as the functionality for users to add places to their favourites, and history of recently searched places to be stored. I would also like to add a 'use my location' feature so the user can get the weather for the location they currently reside in.

My plan is to continue building up my unit and integration tests to get good code coverage and implement these into the pipelines so that they run automatically when changes are committed. I would also like to develop some end to end testing.

## Attributions

My assets were obtained from the following creators

<a href="https://www.flaticon.com/free-icons/humidity" title="humidity icons">Humidity icons created by Freepik - Flaticon</a> |
<a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Iconic Panda - Flaticon</a> |
<a href="https://www.flaticon.com/free-icons/thermometer" title="thermometer icons">Thermometer icons created by jocularityart - Flaticon</a> |
<a href="https://www.flaticon.com/free-icons/barometer" title="barometer icons">Barometer icons created by Good Ware - Flaticon</a> |
<a href="https://www.flaticon.com/free-icons/sunset" title="sunset icons">Sunset icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Muhammad_Usman - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/cute" title="cute icons">Cute icons created by Adorableninana - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/cute" title="cute icons">Cute icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/cloudy" title="cloudy icons">Cloudy icons created by Freepik - Flaticon</a> |
<a href="https://www.flaticon.com/free-icons/astronomy" title="astronomy icons">Astronomy icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/lightning-bolt" title="lightning bolt icons">Lightning bolt icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/storm" title="storm icons">Storm icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/snowy" title="snowy icons">Snowy icons created by Freepik - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/winter" title="winter icons">Winter icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/fog" title="fog icons">Fog icons created by photo3idea_studio - Flaticon</a> | <a href="https://www.flaticon.com/free-icons/foggy" title="foggy icons">Foggy icons created by surang - Flaticon</a> | <a href="https://www.vecteezy.com/free-vector/weather-background">Weather Background Vectors by Vecteezy</a>
