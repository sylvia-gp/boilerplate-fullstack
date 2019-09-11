import request from 'superagent'

const rootUrl = '/api/v1'

export function getTanks () {
  return request.get(rootUrl + '/tanks')
}

export function getTankById (id) {
  return request.get(rootUrl + `/tanks/${id}`)
}

export function getFishByTankId (id) {
  return request.get(rootUrl + `/tanks/fish/${id}`)
}

export function newFish (fish) {
  return request.post(rootUrl + '/tanks/newFish')
  .send(fish)
  .catch(e => {console.log(e) })
}