const pronouns = document.querySelector('#pronouns');
const firstName = document.querySelector('#first-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const termsYes = document.querySelector('#terms-yes');
const termsNo = document.querySelector('#terms-no');

let currentErr = [];

validateForm = (e) => {
    e.preventDefault();

    removeErr(currentErr);

    currentErr = [];

    const nameReg = /^[a-zA-Z]+$/
    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    // pronouns error
    if (pronouns.value == 'none') {
        currentErr.push({id: 'pronouns', message: 'Error! Select a pronoun!'});
    }

    // name error
    if (firstName.value == '' || (!nameReg.test(firstName.value))) {
        currentErr.push({id: 'first-name', message: 'Error! Incorrect name format'});
    }

    // email error
    if (email.value == '' || (!emailReg.test(email.value))) {
        currentErr.push({id: 'email', message: 'Error. Please enter a valid email'});
    }

    // password error
    if (password.value == '' || (!passReg.test(password.value))) {
        currentErr.push({id: 'password', message: 'Error. Invalid password.'});
    }

    // confirm password error
    if (confirmPassword.value == '' || (confirmPassword.value !== password.value)) {
        currentErr.push({id: 'confirm-password', message: 'Error. Password do not match'});
    }

    // privacy error
    if ((!termsYes.checked && !termsNo.checked) || termsNo.checked) {
        currentErr.push({id: 'privacy', message: 'Error. Please agree to the terms.'})
    }


    // only want to return false if one or more cases are invalid
    // cycle through errors[i].error
    // if any are true
    // return false (aka do not submit form)
    if (currentErr.length > 0) {
        displayErr(currentErr)
        return false;
    } else {
        const form = document.querySelector('#register');
        form.reset();
        alert('form submitted')
        return true;
    }

}

displayErr = (errs) => {
    errs.forEach( (error) => {
        const newEle = document.querySelector(`.${error.id}`);
        // newEle.removeChild(newEle.lastElementChild);
        const node = document.createElement('p');
        node.setAttribute('class', `${error.id}-err`); /// or this could just be ('class', 'err') if they can all be styled the same
        node.innerHTML = `${error.message}`;
        newEle.append(node);
    })
}

removeErr = (errs) => {
    errs.forEach((error) => {
        const element = document.querySelector(`.${error.id}`);
        if(typeof(element) != 'undefined' && element != null){
            element.innerHTML = '';
        }
    })
}

clearForm = () => {
    pronouns.value = 'none';
    firstName.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    termsYes.reset();
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', validateForm);
