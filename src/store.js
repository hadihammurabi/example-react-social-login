import { observable } from 'mobx';

const userFromSession = sessionStorage.getItem('user');

const store = observable({
  googleClientId: '153968427944-thten0p7sgls2h6sctphggpfqmhvujr1.apps.googleusercontent.com',
  user: userFromSession ? JSON.parse(userFromSession) : null,
});

export default store;
