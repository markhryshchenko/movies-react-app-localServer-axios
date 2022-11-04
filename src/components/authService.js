import jwtDecode from "jwt-decode";
const apiUrl = "http://localhost:5000";
export async function login(email, password) {
    await fetch(`${apiUrl}/login`, {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      localStorage.setItem('token', token)
      console.log(jwtDecode(token))
}
export async function register(user) {
  await fetch(`${apiUrl}/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export function logout() {}
