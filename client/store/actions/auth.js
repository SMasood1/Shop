export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      })
    });
    if(!response.ok){
        throw new Error('Something went wrong!');
    }
    let resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
};
