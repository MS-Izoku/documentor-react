const baseURL = "http://localhost:3000/";

export const loginUserRegular = (username, password) => {
  fetch(baseURL + "login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      window.localStorage.setItem('token' , json.jwt)
    });
};

export const loginUserOAuth = () => {
  console.log("Loggin in with OAuth");
};
