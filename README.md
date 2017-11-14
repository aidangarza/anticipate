# anticipate
A simple promise function to ensure that a remote resource has loaded before you try to use it.

Example:

    (function () {
      anticipate(() => window.analytics).then(() => {
        window.analytics.identify('1234', { name: 'Johnny Appleseed' })
      })
    })()
