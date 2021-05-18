const pronouns = document.querySelector('#pronouns');

let errors = [];

validateForm = (e) => {
    e.preventDefault();

    // pronouns error
    if (pronouns.value == 'none') {
        errors.push({id: pronoun, text: 'Error!! Please select a pronoun', section: pronouns})
        return false;
    }

    // const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    displayErr(errors);
    console.log('form submitted')
}

displayErr = (error) => {
    error.forEach( item => {
        const node = document.createElement('p');
        node.setAttribute('class', `${errors.id}-err`); /// or this could just be ('class', 'err') if they can all be styled the same
        node.innerHTML = `${errors.message}`;
    
        `${errors.section}.append(node)`;
    })  
}

pronounsErr = () => {
    const pronounsEle = document.querySelector('.pronouns');
    const node = document.createElement('p');
    node.setAttribute = ('class', 'pronouns-err');
    node.innerHTML = 'Error!!!!!'
    pronounsEle.append(node);
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', validateForm);
