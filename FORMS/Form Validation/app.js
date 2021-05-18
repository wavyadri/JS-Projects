const pronouns = document.querySelector('#pronouns');
const fullName = document.querySelector('#full-name');

const errors = [
    {
        id: 'pronouns',
        message: 'Error! Select a pronoun',
        error: false, 
    },
    {
        id: 'full-name',
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

    // pronouns error
    if (pronouns.value == 'none') {
        // pronounsErr();
        displayErr('pronouns');
        //pronounsErr();
        // return false;
    }

    // name error
    if (fullName.value === '') {
        displayErr('full-name');
        // return false;
    }

    // only want to return false if one or more cases are invalid
    // cycle through errors[i].error
    // if any are true
    // return false (aka do not submit form)


    // const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    console.log('form submitted')


}

displayErr = (section) => {
    const index = errors.findIndex(error => error.id === section);

    const newEle = document.querySelector(`.${section}`);
    const node = document.createElement('p');
    node.setAttribute('class', `${errors[index].id}-err`); /// or this could just be ('class', 'err') if they can all be styled the same
    node.innerHTML = `${errors[index].message}`;

    if (document.contains(node)) {
        console.log('already exists')
    } else {
        newEle.append(node);
    }
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
