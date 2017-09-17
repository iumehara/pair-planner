import data from './data.json'

export const get = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
}

export const set = () => {
  console.log('cannot set data using localFileRepo')
}
