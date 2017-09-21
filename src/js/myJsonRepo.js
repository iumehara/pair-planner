export const get = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.myjson.com/bins/' + process.env.MYJSON_BUCKET_ID)
      .then(rawData => rawData.json())
      .then(data => resolve(data))
  })
}

export const set = (data) => {
  return new Promise((resolve, reject) => {
    fetch(
      'https://api.myjson.com/bins/' + process.env.MYJSON_BUCKET_ID,
      {
        method: 'PUT',
        headers: new Headers({
          "Content-Type": "application/json",
          "Accept":"application/json"
        }),
        body: JSON.stringify(data)
      }
    )
      .then(rawData => rawData.json())
      .then(data => resolve(data))
  })
}
