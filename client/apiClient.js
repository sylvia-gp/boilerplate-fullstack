import request from 'superagent'

const rootUrl = '/api/v1/tanks'

export function getTanks () {
  return request.get(rootUrl + '/')
}

export function getTankById (id) {
  return request.get(rootUrl + `/${id}`)
}

export function getFishByTankId (id) {
  return request.get(rootUrl + `/fish/${id}`)
}

export function newFish (fish) {
  return request.post(rootUrl + '/newFish')
  .send(fish)
  .catch(e => {console.log(e) })
}

export function newTank (tank) {
  return request.post(rootUrl + '/newTank')
  .send(tank)
  .catch(e => {console.log(e)})
}