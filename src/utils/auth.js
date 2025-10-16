export function setAuthData({ access_token, refresh_token, role }) {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  localStorage.setItem("role", role);
}

export function getAccessToken() {
  return localStorage.getItem("access_token");
}

export function getRefreshToken() {
  return localStorage.getItem("refresh_token");
}

export function getUserRole() {
  return localStorage.getItem("role");
}

export function isAuthenticated() {
    return !!getAccessToken()
}

export function logout () {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("role")
}