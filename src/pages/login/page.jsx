import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import store from "../../store";

export default () => {
  const [user, setUser] = useState(false);

  const onResponse = (res) => {
    if (res.error) {
      return;
    }

    const user = res.profileObj;
    user.accessToken = res.accessToken;
    store.isLogin = true;
    store.user = user;

    sessionStorage.setItem("user", JSON.stringify(user));
    store.user = user;
    setUser(user);
  };

  if (user || store.user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <GoogleLogin
        clientId="153968427944-thten0p7sgls2h6sctphggpfqmhvujr1.apps.googleusercontent.com"
        // buttonText="Login"
        onSuccess={onResponse}
        onFailure={onResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};