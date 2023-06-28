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
        console.log(nameEnter,lastnameEnter,emailEnter,passwordEnter)

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
                <input id="name" className={classes.input} onChange={nameInputHandler}></input>

                <label htmlFor="lastname">LastName</label>
                <input id="lastname" className={classes.input} onChange={lastInputHandler}></input>

                <label htmlFor="email">Email</label>
                <input id="email" className={classes.input} onChange={emailInputHandler}></input>

                <label htmlFor="password">Password</label>
                <input id="password" className={classes.input} onChange={passwordInputHandler}></input>
                <Button type="submit">send</Button>

            </form>
        </Cartform>

    )

}
export default AddUser;