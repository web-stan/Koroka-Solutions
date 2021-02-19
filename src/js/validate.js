'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.profile-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let validForm = formValidate();
        // console.log('validForm: ', validForm);

        if (validForm) {
            const formData = new FormData(form);

            // let response = await fetch(`https...`, { 
            //     method: 'POST',
            //     body: formData
            // });

            // just for checking check the answer
            let response = await Promise.resolve({ok: 200})

            if (response.ok) {
                console.log(response.ok)
                form.reset();
            }
        }

    });

    function formValidate() {
        let inputNameValid;
        let inputEmailValid;
        let inputPhoneValid;
        let profileFormCheckboxValid;


        const inputName = document.querySelector('[name="Name"]'),
            inputEmail = document.querySelector('[name="Email"]'),
            inputPhone = document.querySelector('[name="Phone"]'),
            profileFormCheckbox = document.querySelector('.profile-form__checkbox');


        if (inputName.value.trim() === '') {
            addError(inputName);
            inputNameValid = false;
        } else {
            removeError(inputName);
            inputNameValid = true;
        }

        if (!validateEmail(inputEmail.value)) {
            addError(inputEmail);
            inputEmailValid = false;
        } else {
            removeError(inputEmail);
            inputEmailValid = true;
        }

        if (isNaN(inputPhone.value.trim()) || inputPhone.value === '') {
            addError(inputPhone);
            inputPhoneValid = false;
        } else {
            removeError(inputPhone);
            inputPhoneValid = true;
        }

        if (!profileFormCheckbox.checked) {
            addError(profileFormCheckbox);
            profileFormCheckboxValid = false;
        } else {
            removeError(profileFormCheckbox);
            profileFormCheckboxValid = true;
        }

        // console.log('inputNameValid: ', inputNameValid);
        // console.log('inputEmailValid: ', inputEmailValid);
        // console.log('inputPhoneValid: ', inputPhoneValid);
        // console.log('profileFormCheckboxValid: ', profileFormCheckboxValid);

        return inputNameValid && inputEmailValid && inputPhoneValid && profileFormCheckboxValid;

    }

    function addError(item) {
        item.classList.add('error');
        item.parentElement.classList.add('error');
    }

    function removeError(item) {
        item.classList.remove('error');
        item.parentElement.classList.remove('error');
    }

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});