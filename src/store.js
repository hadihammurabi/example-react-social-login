import { observable } from 'mobx';

const userFromSession = sessionStorage.getItem('user');

const store = observable({
  user: userFromSession ? JSON.parse(userFromSession) : null,
});

export default store;
