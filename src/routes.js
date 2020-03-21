const airbnbEndPoints = require('endpoints/airbnb')
const moviesEndPoints = require('endpoints/movies')

const { API_VERSION = 'v1' } = process.env
module.exports = app => {
  const addRoutes = (appServer, routes, path) => {
    Object.keys(routes).forEach(e => {
      if (routes[e].GET) {
        appServer.get(`/api/${API_VERSION}${path}${e}`, routes[e].GET)
      }
      if (routes[e].PUT) {
        appServer.put(`/api/${API_VERSION}${path}${e}`, routes[e].PUT)
      }
      if (routes[e].POST) {
        appServer.post(`/api/${API_VERSION}${path}${e}`, routes[e].POST)
      }
      if (routes[e].PATCH) {
        appServer.patch(`/api/${API_VERSION}${path}${e}`, routes[e].PATCH)
      }
      if (routes[e].DELETE) {
        appServer.delete(`/api/${API_VERSION}${path}${e}`, routes[e].DELETE)
      }
    })
  }

  addRoutes(app, moviesEndPoints, '/movies/')
  addRoutes(app, airbnbEndPoints, '/airbnb/')
  app.get('/heartbeat', (req, res) => res.send('thump thump'))
  app.all('*', (req, res) => {
    res.redirect('/notfound')
  })
}
