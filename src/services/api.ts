import axios from "axios";


export const api = axios.create({
  baseURL: 'https://parseapi.back4app.com',
  headers: {
    'X-Parse-Application-Id': 'lbrQhnvkld8gfIs0NPuSuyxis8SjPJo6ztnsN9eF',
    'X-Parse-REST-API-Key': 'U9IGOgRvhsCcobk8DBDdN4iNSC8pThsYxTb0fOvt',
    'X-Parse-Revocable-Session': '1'
  }
});
