import ajax from './ajax';

export const reqLogin = data => ajax('/login', data , 'POST');
export const reqregister = data => ajax('/register', data, 'POST');
