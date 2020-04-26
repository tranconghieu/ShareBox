import axios from 'axios';
import GeneralFunction from './GeneralFunction';

//You can intercept requests or responses before they are handled by then or catch.

// Add a request interceptor

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
    return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

//axios.defaults.baseURL = Config.API_URL;

export default class HttpService {
  static generateHeader(headers?, newToken?) {
    //const headerData = getHeader();
    headers = headers !== null ? { ...headerData, ...headers } : null;
    //const token = newToken ? newToken : getToken();

    const originHeader = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${token}`,
    };
    return { ...originHeader, ...headers };
  }
  static async Get(url, config?) {
    try {
      const configHeaders = (config && config.headers) ? config.headers : null;
      return await axios.get(url,
        {
          ...config,
          headers: this.generateHeader(configHeaders, null),
        }
      );
    } catch (error) {
      throw error;
    }
  }
  static async Post(url, data, config?) {
    try {
      const configHeaders = (config && config.headers) ? config.headers : null;
      return await axios.post(url, data, {
        ...config,
        headers: this.generateHeader(configHeaders, null),
      })
    }
    catch (error) {
      throw error
    }
  }
  static MultiRequest(listRequest) {
    return new Promise((resolve, reject) => {
      try {
        axios.all(listRequest)
          .then(axios.spread(function () {
            resolve(arguments);
          }))
          .catch(error => reject(error))
      }
      catch (error) {
        throw error
      }
    });
  }
}