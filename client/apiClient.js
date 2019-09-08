import request from 'superagent'

const rootUrl = '/api/v1'

export function getTanks () {
  return request.get(rootUrl + '/tanks/')
    .then(result => {
      console.log(result.body)
      return result.body
    })
}
