{
  type Context = {
    appId?: string
    userId?: string
  }

  function log(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
  }

  log('Page loaded') // "2024-03-18T11:19:16.716Z Page loaded undefined"
}
