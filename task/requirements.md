#1

напишите обработку формы авторизации с id="login-form", в которой пользователь вводит email и пароль.
Для регистрации нужно отправить AJAX-запрос по адресу:
"http://danit.com.ua/login".
В теле запроса передавайте объект вида:
{
    "email": "Email пользователя",
    "password": "Пароль пользователя"
}
В форму авторизации вы можете вводить email и пароль, под которыми вы успешно зарегистрировались в предыдущей задаче.
Если авторизация прошла успешно, вы получите в ответ объект вида:
{
    "status": "Success",
    "token": "e7638bda50b7"
}

Если ли авторизация не удалась, вы получите ответ вида:
{
    "status": "Error",
    "token": "Login or password are incorrect"
}

Полученый при успешной авторизации токен сохраните в localstorage.

Используйте async/await.

#2

Напишите GET-запрос на адрес : "http://danit.com.ua/cases".
В запросе вам нужно авторизироваться чрез Bearer токен,
то есть в заголовке "Authorization" указать значение "Bearer token",
где token нужно считать из localStorage (вы его там сохранили на предыдущем задании)

Используй async/await, Люк.