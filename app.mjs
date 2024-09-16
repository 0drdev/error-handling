import { validateUser } from './js/errors/validations.mjs'
import { ConnectionError, ValidationError } from './js/errors/errors.mjs'

const name = '0dr'
const age = 25
const email = ''

try {
  validateUser({ name, age, email })
} catch (e) {
  console.log(e.name)
  if (e instanceof ConnectionError) {
    // retry after a few seconds
    setTimeout(() => {
      try {
        validateUser({ name, age, email })
      } catch (innerError) {
        console.log('Retry failed:', innerError.message)
      }
    }, 5000) // Retry after 5 seconds
  }
  if (e instanceof ValidationError) {
    // show UI modal validation
    console.log('Validation error:', e.message)
  }
}
