import axios from 'axios'
// import { log } from 'util'
import serverUrl from '../src/configServer'
// import Unsplash from 'unsplash-js';
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env')
})

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ?
    '/api'
    : `${serverUrl}`,

  withCredentials: true,
})

// Unsplash API

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,
  checkLogin() {
    return service
      .get('/checkLogin')
      .then(res => res.data)
      .catch(errHandler)
  },
  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  // edit(userInfo) {
  //   return service
  //     .post('/edit-user', userInfo)
  //     .then(res => {
  //       // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
  //       localStorage.setItem('user', JSON.stringify(res.data))
  //       return res.data
  //     })
  //     .catch(errHandler)
  // },

  login(username, password) {
    console.log("the log in --- ", username, password);

    return service
      .post('/login', {
        username,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  logout() {
    localStorage.removeItem('user')
    return service.get('/logout')
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler)
  },
  

  addPicture(file) {
    const formData = new FormData()
    formData.append('picture', file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },
  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errHandler);
  },

  saveNewThing(newThing) {
    // console.log('new thing is: ', newThing)
    return service.post('/things/create', newThing)
      .then(res => res.data)
      .catch(errHandler);
  }

}

console.log("IN PROCESS.ENV", process.env)