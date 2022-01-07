import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MyMap from "./MyMap";
// import { Map, Marker } from "pigeon-maps"

function Maps() {
  //const API_KEY = process.env.REACT_APP_API_KEY

  // const URL = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_rL9oaS9XXpfepEAWPXCFjXUotslFU&ipAddress=8.8.8.8'

  const URL =
    "https://api.freegeoip.app/json/?apikey=bade7020-6fb9-11ec-8f9a-d7b393f72ac4";

  const [userData, setUserData] = useState([]);
  const [location, setLocation] = useState();
  const [country, setCountry] = useState([]);
  const [borderCountry, setBorderCountry] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // we first fetch the API to get our IP address and information about our location
      const fetchUserData = await axios.get(URL);

      // With the response of our first call, we use the country name to fetch an API who is gonna give more info about our location
      const fetchCountry = await axios.get(
        `https://restcountries.com/v3.1/name/${fetchUserData.data.country_name}`
      );


    // From our second call we are a getting a list of countries that we are mapping through to get info about those countries
      const fetchBorderCountries = await fetchCountry.data[0].borders.map(
        (border) => {
          return axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${border}`
          )
          // .then if we want to return the result for each api calls
        }
      );

      // Promise.all store the result of all the promises into an array
      Promise.all(fetchBorderCountries)
        .then(res => setBorderCountry(res))
      ;
      // We store the values we are getting from the different fetch methods into states
      setUserData(fetchUserData.data);
      setCountry(fetchCountry.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
 // If there is an error or the api call is loading we will display different returns
  if (loading) return <h1>It is Loading</h1>;
  if (error) return <h1>Error </h1>;
  return (
    <div className="App">
      <h1>Your IP:{userData.ip}</h1>
      <h2>Your city: {userData.city}</h2>
      <p> {country.capital} </p>
      <MyMap borderCountry={borderCountry} country={country} location={location} userData={userData} />
    </div>
  );
}

export default Maps;
