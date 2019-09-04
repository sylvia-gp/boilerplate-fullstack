import request from 'superagent'

const rootUrl = '/api/v1'

export function getTanks () {
  return request.get(rootUrl + '/tanks')
    .then(res => {
      return res.body.tanks
    })
}
