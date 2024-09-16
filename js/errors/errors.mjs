const createErrorFactory = function (name) {
  return class BusinessError extends Error {
    constructor(message) {
      // is used to call the constructor being extended.
      super(message)
      this.name = name
      // with this .stack we can remove all errors
      this.stack = ''
    }
  }
}

export const ConnectionError = createErrorFactory('ConnectionError')
export const ValidationError = createErrorFactory('ValidationError')
