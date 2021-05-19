const pronouns = document.querySelector('#pronouns');
const firstName = document.querySelector('#first-name');

let currentErr = [];

validateForm = (e) => {
    e.preventDefault();

    currentErr = [];

    const nameReg = /^[a-zA-Z]+$/
    // const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // pronouns error
    if (pronouns.value == 'none') {
        currentErr.push({id: 'pronouns', message: 'Error! Select a pronoun!'});
    }

    // name error
    if (firstName.value == '' || (!nameReg.test(firstName.value))) {
        currentErr.push({id: 'first-name', message: 'Error! Incorrect name format'});
    }

    // only want to return false if one or more cases are invalid
    // cycle through errors[i].error
    // if any are true
    // return false (aka do not submit form)

    displayErr(currentErr)
    
    console.log('form submitted')


}

displayErr = (errs) => {
    errs.forEach( (error) => {
        const newEle = document.querySelector(`.${error.id}`);
        newEle.innerHTML = '';
        const node = document.createElement('p');
        node.setAttribute('class', `${error.id}-err`); /// or this could just be ('class', 'err') if they can all be styled the same
        node.innerHTML = `${error.message}`;
        newEle.append(node);
    })
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', validateForm);
