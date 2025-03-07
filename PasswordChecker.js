/**
 * Checks if the provided password meets the required criteria.
 *
 * @param {string} password - The password to be checked.
 * @throws {Error} If the password is not a string.
 * @throws {Error} If the password is less than 8 characters long.
 * @throws {Error} If the password is more than 20 characters long.
 * @throws {Error} If the password does not contain at least one lowercase letter.
 * @throws {Error} If the password does not contain at least one uppercase letter.
 * @throws {Error} If the password does not contain at least one number.
 * @throws {Error} If the password does not contain at least one special character (!@#$%^&*).
 * @returns {boolean} Returns true if the password meets all criteria.
 */
export function checkPassword(password) {
  if(typeof password !== 'string') {
    throw new Error('Password must be a string');
  }
  if(password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }
  if(password.length > 20) {
    throw new Error('Password must be at most 20 characters long');
  }
  if(!/[a-z]/.test(password)) {
    throw new Error('Password must contain at least one lowercase letter');
  }
    if(!/[A-Z]/.test(password)) {
        throw new Error('Password must contain at least one uppercase letter');
    }
    if(!/[0-9]/.test(password)) {
        throw new Error('Password must contain at least one number');
    }
    if(!/[!@#$%^&*]/.test(password)) {
        throw new Error('Password must contain at least one special character');
    }
  return true;
}