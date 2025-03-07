export function checkPassword(password) {
  if(typeof password !== 'string') {
    throw new Error('Password must be a string');
  }
}