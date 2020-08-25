export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("http://2828f49b6007.ngrok.io/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      const errorResponseData = await response.json();
      const errorId = errorResponseData.message;
      let message = "Something Went Wrong!";

      if (errorId === "EMAIL_EXISTS") {
        message = "Email exists already!";
      }
      throw Error(message);
    }
  };
};

export const signin = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("http://2828f49b6007.ngrok.io/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      const errorResponseData = await response.json();
      const errorId = errorResponseData.message;
      let message = "Something Went Wrong!";

      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email cound not be found!";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is invalid!";
      }
      throw Error(message);
    }
    let resData = await response.json();

    dispatch({
      type: LOGIN,
      payload: {
        token: resData.accessToken,
        userId: resData.userId,
      },
    });
  };
};
