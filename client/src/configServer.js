let serverUrl = '';
if (process.env.NODE_ENV === 'production') {
  serverUrl = '/api'
} else {
  serverUrl = 'http://localhost:5000/api'
}

module.exports = serverUrl;