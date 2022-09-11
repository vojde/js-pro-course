import {testEmail} from './validateEmail.js';
import {drawAuthorizationForm} from './authorization.js';

export function drawRegistrationForm() {
    document.querySelector('main').innerHTML = `<div class="box-content">
        <section class="name-content">
            <h1>Регистрация нового пользователя</h1>
        </section>
        <section class="box-form">
            <form>
                <div class="box-input mb-3">
                    <label for="exampleInputEmail1" class="my-label form-label">Логин</label>
                    <input id="exampleInputEmail1" type="email" class="my-input form-control" aria-describedby="emailHelp">
                </div>
                <div class="box-input mb-3">
                    <label for="exampleInputPassword1" class="my-label form-label">Пароль</label>
                    <input id="exampleInputPassword1" type="password" class="my-input form-control">
                </div>
                <div class="box-input mb-3">
                    <label for="exampleInputPassword2" class="my-label form-label">Повторите пароль</label>
                    <input id="exampleInputPassword2" type="password" class="my-input form-control">
                </div>
            </form>
        </section>
        <section class="box-error">
            <p>Ошибка регистрации</p>
        </section>
        <section class="box-add-text">
            <div class="box-registration"></div>
            <button class="btn-ok">OK</button>
        </section>
    </div>`;

    document.getElementById('exampleInputEmail1').addEventListener('change', validateEmail);
    document.querySelector('.btn-ok').addEventListener('click', gotoAuthorizationForm);
};

function validateEmail() {
    const email = document.getElementById('exampleInputEmail1');
    const errorText = document.querySelector('.box-error');

    if (testEmail(email.value) == false) {
        errorText.style.visibility = 'visible';
    } else {
        errorText.style.visibility = 'hidden';
    }
};

export function gotoAuthorizationForm() {
    const errorText = document.querySelector('.box-error');
    const email = document.getElementById('exampleInputEmail1').value;
    const exampleInputPassword1 = document.getElementById('exampleInputPassword1').value;
    const exampleInputPassword2 = document.getElementById('exampleInputPassword2').value;
    if (exampleInputPassword1.length >= 6 && exampleInputPassword1 == exampleInputPassword2) {
        signUp(email, exampleInputPassword1);
        drawAuthorizationForm();
    } else {
        errorText.style.visibility = 'visible';
    }
};

function signUp(email, password) {
    const userData = {
        login: email,
        createPassword: password,
        confirmPassword: password
    };

    const url = 'https://immense-badlands-47107.herokuapp.com';
    const urlSignUp = '/auth/signUp';

    fetch(url + urlSignUp, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json());
};

