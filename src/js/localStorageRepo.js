export const get = () => {
  return new Promise((resolve, reject) => {
    const pairDataJSON = localStorage.getItem('pairData')
    if (pairDataJSON) {
      const pairDataObject = JSON.parse(pairDataJSON)
      resolve(pairDataObject)
    }
    reject('no pairData available')
  })
}

export const set = (data) => {
  return new Promise((resolve, reject) => {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem('pairData', stringifiedData)
    resolve(data)
  })
}
