new Promise((resolve, reject) => {
  if (password === '12345') {
    setTimeout(() => {
      const user: IUser = {
        firstname: 'Farid',
        lastname: 'Mansimli',
        email,
      };
      resolve({
        user,
        accessToken: 'accesstoken',
        refreshToken: 'refreshToken',
      });
    }, 2000);
  } else {
    setTimeout(() => {
      reject({message: 'email or password is incorrect!!'});
    }, 2000);
  }
})
  .then(resp => {
    console.log('data=>>', resp);
    return resp;
  })
  .catch(error => {
    console.log('error=>>', error);
    return error;
  });
