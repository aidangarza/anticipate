export default function (getter, interval, timeout) {
  // Return a promise
  return new Promise((resolve, reject) => {
    // If the getter returns a truthy value, resolve immediately
    if (getter()) resolve()
    // Set timeout to default if not provided
    timeout = timeout || 5000
    // Set interval to default if not provided
    interval = interval || 100
    // Track the ticks
    let ticks = 0
    // Create an interval
    let unwatch = setInterval(() => {
      // If the getter is truthy, resolve
      if (getter()) {
        // Clear the interval
        window.clearInterval(unwatch)
        // Resolve
        resolve()
      // If the timeout has passed, reject
      } else if (ticks >= (timeout / interval)) {
        // Clear the interval
        window.clearInterval(unwatch)
        // Reject
        reject(new Error('Too much anticipation!'))
      }
      // Step up the ticks
      ticks++
    })
  })
}
