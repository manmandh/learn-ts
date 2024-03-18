type MyEvent<T> = {
  target: T
  type: string
}
function triggerEvent<T>(event: MyEvent<T>): void {
// ...
}

triggerEvent({ // T is Element | null
target: document.querySelector('#myButton'),
type: 'mouseover'
})
