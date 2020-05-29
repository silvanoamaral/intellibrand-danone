'use strict'

const axios = require('axios')

const listaPlantas = async (query) => {
  try {
    const base_url = `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service${query}`

    return await axios.get(base_url)
    .then(res => res.data)
    .catch(() => {
      return {}
    })
  } catch(e) {
    next({})
  }
}

module.exports = listaPlantas