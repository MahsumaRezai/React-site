import classes from './Add.module.css'
import Button from './Button';
import Cartform from './Cartfrom';
import { useState } from 'react';
const AddUser = (posp) => {
    const [nameEnter, setEnter] = useState('');
    const [lastnameEnter, setlastEnter] = useState('');
    const [emailEnter, setemailEnter] = useState('');
    const [passwordEnter, setpasswordEnter] = useState('');

    const formHandler = (event) => {
        event.preventDefault();
        if (nameEnter.trim().length === 0 && lastnameEnter.length < 3 && emailEnter.includes('@') === -1 && passwordEnter.length < 5) {
            return;
        }
        console.log(nameEnter, lastnameEnter, emailEnter, passwordEnter);
        setEnter('');
        setlastEnter('');
        setemailEnter('');
        setpasswordEnter('')

    }
    const nameInputHandler = (event) => {
        setEnter(event.target.value);
    }

    const lastInputHandler = (event) => {
        setlastEnter(event.target.value);
    }
    const emailInputHandler = (event) => {
        setemailEnter(event.target.value);
    }
    const passwordInputHandler = (event) => {
        setpasswordEnter(event.target.value);
    }
    return (
        <Cartform>

            <form className={classes.form} onSubmit={formHandler}>
                <label htmlFor="name">Name</label>
                <input id="name" className={classes.input} onChange={nameInputHandler} value={nameEnter}></input>

                <label htmlFor="lastname">LastName</label>
                <input id="lastname" className={classes.input} onChange={lastInputHandler} value={lastnameEnter}></input>

                <label htmlFor="email">Email</label>
                <input id="email" className={classes.input} onChange={emailInputHandler} value={emailEnter}></input>

                <label htmlFor="password">Password</label>
                <input id="password" className={classes.input} onChange={passwordInputHandler} value={passwordEnter}></input>
                <Button type="submit">send</Button>

            </form>
        </Cartform>

    )

}
export default AddUser;