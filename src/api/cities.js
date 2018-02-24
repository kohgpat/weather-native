import axios from "axios";
import { ENDPOINT, API_KEY } from "../constants";

const cities = {
  find: (city, units = "celcius") => {
    const UNITS = units === "celcius" ? "metric" : "imperial";
    return axios.get(
      ENDPOINT + `/data/2.5/weather?APPID=${API_KEY}&units=${UNITS}&q=${city}`
    );
  }
};

export default cities;
