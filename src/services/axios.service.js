import axios from "axios";
import {carsApi, jsonPlaceHolderAPI} from "../constants";

const placeHolderApiService = axios.create({baseURL:jsonPlaceHolderAPI});
const carsApiService = axios.create({baseURL:carsApi});


export {
    placeHolderApiService,
    carsApiService
}