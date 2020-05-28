import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import store from '../../store';

export default () => {
  const [toLogin, setToLogin] = useState(false);

  const onResponse = () => {
    sessionStorage.clear();
    store.user = null;
    setToLogin(true);
  };

  return (
    <div>
      {
        toLogin 
        ? <Redirect to="/login" />
        : <>
          <h1>Halo, {store.user.name}!</h1>
          <img src={store.user.imageUrl} alt="Profile Pic" />

          <br/>
          Selamat datang di aplikasi keren ini.

          <br/>
          <GoogleLogout
            clientId={store.googleClientId}
            // buttonText="Logout"
            onLogoutSuccess={onResponse}
          />
        </>
      }
    </div>
  );
};
