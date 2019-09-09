import request from 'superagent'

const rootUrl = '/api/v1'

export function getTanks () {
  return request.get(rootUrl + '/tanks')
    // .then(result => {
    //   return result.body
    // })
}

export function getTankById (id) {
  return request.get(rootUrl + '/tanks/:id')
  // .then(result => {
  //   return result.body
  // })
}