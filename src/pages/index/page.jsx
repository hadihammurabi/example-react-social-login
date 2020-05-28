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
            clientId='153968427944-thten0p7sgls2h6sctphggpfqmhvujr1.apps.googleusercontent.com'
            // buttonText="Logout"
            onLogoutSuccess={onResponse}
          />
        </>
      }
    </div>
  );
};
