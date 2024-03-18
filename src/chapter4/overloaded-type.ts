{
  // Shorthand call signature
  type Log1 = (message: string, userId?: string) => void
  // Full call signature
  type Log2 = {
    (message: string, userId?: string): void
  }
}


{
  type WarnUser = {
    (warning: string): void
    wasCalled: boolean
  }
  function warnUser(warning) {
    if (warnUser.wasCalled) {
      return
    }
    warnUser.wasCalled = true
    alert(warning)
  }
  warnUser.wasCalled = false
}
