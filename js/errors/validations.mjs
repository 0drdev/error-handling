import { ValidationError, ConnectionError } from './errors.mjs'

export const validateUser = ({ name, age, email } = {}) => {
  if (!name) throw new ValidationError('name is required')
  if (!age) throw new ValidationError('age is required')
  if (!email) throw new ValidationError('email is required')

  // Calling the database to save the user
  try {
    // Replace with actual database connection code
    // mongodb.connect();
  } catch (e) {
    throw new ConnectionError('database is not available')
  }
}
