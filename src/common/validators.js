module.exports = {
  required: (value) => !!value || 'Обязательное поле!',
  counter: (length) => (value) => value.length >= length || `Минимальная длина - ${length} символов!`,
  email: (value) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Неправильный e-mail!';
  },
  passwordMatch: (password) => (value) => password === value || 'Пароли не совпадают!',
};
