import React from 'react';

import store from '../../store';
import { GoogleLogout } from 'react-google-login';

export default ({ history }) => {
  const onResponse = () => {
    sessionStorage.clear();
    window.location = '/';
  };

  return (
    <div>
      <h1>Halo, {store.user.name}!</h1>
      <img src={store.user.imageUrl} alt="Profile Pic" />

      <br/>
      Selamat datang di aplikasi keren ini.

      <br/>
      <GoogleLogout
        clientId='153968427944-thten0p7sgls2h6sctphggpfqmhvujr1.apps.googleusercontent.com'
        buttonText="Logout"
        onLogoutSuccess={onResponse}
      />
    </div>
  );
};
