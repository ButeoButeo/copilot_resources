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
}