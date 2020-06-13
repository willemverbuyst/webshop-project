// import axios from 'axios';

// const API_URL = ....;

// export function userLoggedIn(profile, token) {
//   return {
//     type: 'LOGIN',
//     payload: {
//       profile,
//       token,
//     },
//   };
// }

export function logout(dispatch, getState) {
  console.log('arrived in actions');
  // localStorage.removeItem('token');
  return { type: 'LOGOUT' };
}
export function login(dispatch, getState) {
  return { type: 'LOGIN' };
}

// export function login(email, password) {
//   return async function thunk(dispatch, getState) {
//     const token = await axios
//       .post(`${API_URL}/login`, {
//         email: email,
//         password: password,
//       })
//       .then((data) => data.data.jwt)
//       .catch((err) => console.log('err', err));

//     const profile = await axios
//       .get(`${API_URL}/me`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => response.data)
//       .catch((err) => console.log('err', err));

//     localStorage.setItem('token', token);
//     dispatch(userLoggedIn(profile, token));
//   };
// }

// export async function bootstrapLoginState(dispatch, getState) {
//   if (localStorage.getItem('token')) {
//     const tokenInLocalStorage = localStorage.getItem('token');
//     const profile = await axios
//       .get(`${API_URL}/me`, {
//         headers: {
//           Authorization: `Bearer ${tokenInLocalStorage}`,
//         },
//       })
//       .then((response) => response.data)
//       .catch((err) => console.log("you're not logged in anymore", err));

//     dispatch(userLoggedIn(profile, tokenInLocalStorage));
//   }
// }
