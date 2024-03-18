let promise = new Promise<number>(resolve =>
  resolve(45)
)

promise.then(result => // number
  result * 4
)
