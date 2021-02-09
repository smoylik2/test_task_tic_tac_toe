import * as axios from "axios";
import {rootUrl} from './constants';

export const request = axios.create({
    withCredentials: true,
    baseURL: `${rootUrl}/api`,
    headers: {
        "Content-type": "application/json"
    }
});