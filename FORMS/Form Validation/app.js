const pronouns = document.querySelector('#pronouns');
const firstName = document.querySelector('#first-name');

let currentErr = [];
const errors = [
    {
        id: 'pronouns',
        message: 'Error! Select a pronoun',
        error: false, 
    },
    {
        id: 'first-name',
        message: 'Error! Enter a name',
        error: false, 
    },
    {
        id: 'email',
        message: 'Error! What is your email?',
        error: false, 
    },
    {
        id: 'password',
        message: 'Error! Wrong password!',
        error: false, 
    },
    {
        id: 'confirm-password',
        message: 'Error! Passwords do not match!',
        error: false, 
    }
]

validateForm = (e) => {
    e.preventDefault();

    const nameReg = /^[a-zA-Z]+$/
    // const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // pronouns error
    if (pronouns.value == 'none') {
        displayErr('pronouns');
        console.log('pronoun error')
        // return false;
    }

    // name error
    if (firstName.value == '' || (!nameReg.test(firstName.value))) {
        displayErr('first-name');
        console.log('name error')
        // return false;
    }

    // only want to return false if one or more cases are invalid
    // cycle through errors[i].error
    // if any are true
    // return false (aka do not submit form)

    
    console.log('form submitted')


}

displayErr = (currentErr) => {
    // const index = errors.findIndex(error => error.id === section);
    const index = errors.findIndex(error => error.id === currentErr[i]);

    currentErr = [];

    currentErr.push(`${errors[index].id}`);
    console.log(currentErr);

    const newEle = document.querySelector(`.${section}`);
    const node = document.createElement('p');
    node.setAttribute('class', `${errors[index].id}-err`); /// or this could just be ('class', 'err') if they can all be styled the same
    node.innerHTML = `${errors[index].message}`;
    newEle.append(node);

    // if (currentErr.indexOf(section) > -1) {
    //     console.log('already exists')
    // } else {
        
    // }
}

// pronounsErr = () => {
//     const pronounsEle = document.querySelector('.pronouns');
//     const node = document.createElement('p');
//     node.setAttribute = ('class', 'pronouns-err');
//     node.innerHTML = 'Error!!!!!'
//     pronounsEle.append(node);
// }

const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', validateForm);
