import {testEmail} from './validateEmail.js';
import {drawRegistrationForm} from './registration.js';
import {drawCardsForm} from './cards.js'

export function drawAuthorizationForm() {
    document.querySelector('main').innerHTML = `<div class="box-content">
        <section class="name-content">
            <h1>Авторизация / Регистрация</h1>
        </section>
        <section class="box-form">
            <form>
                <div class="box-input mb-3">
                    <label for="exampleInputEmail1" class="my-label form-label">Логин(email)</label>
                    <input id="exampleInputEmail1" type="email" class="my-input form-control" aria-describedby="emailHelp">
                </div>
                <div class="box-input mb-3">
                    <label for="exampleInputPassword1" class="my-label form-label">Пароль</label>
                    <input id="exampleInputPassword1" type="password" class="my-input form-control">
                </div>
            </form>
        </section>
        <section class="box-error">
            <p>Неправильный логин или пароль</p>
        </section>
        <section class="box-add-text">
            <div class="box-registration">
                <button class="btn-registration">Регистрация нового пользователя</button>
            </div>
            <button class="btn-ok">OK</button>
        </section>
    </div>`;

    document.querySelector('.btn-ok').addEventListener('click', login);
    document.querySelector('.btn-registration').addEventListener('click', drawRegistrationForm);
};

function login() {

    if (validateEmail()) {
        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;
        authorization(email, password);
    };
};

function validateEmail() {
    const email = document.getElementById('exampleInputEmail1');
    const errorText = document.querySelector('.box-error');

    if (testEmail(email.value) == false) {
        errorText.style.visibility = 'visible';
        return false;
    } else {
        errorText.style.visibility = 'hidden';
        return true;
    }
};

function authorization(email, password) {
    const userData = {
        login: email,
        password: password
    };

    const url = 'https://immense-badlands-47107.herokuapp.com';
    const urlSignIn = '/auth/signIn';

    fetch(url + urlSignIn, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData)
    })
    .then((response) => {
        if (response.ok) {
            drawCardsForm();
        } else {
            const errorText = document.querySelector('.box-error');
            errorText.style.visibility = 'visible';
        }
    })
};
