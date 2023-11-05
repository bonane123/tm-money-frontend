export function getAuthToken() {
  const authToken = JSON.parse(localStorage.getItem('tm-user-access'));

  return authToken;
}
