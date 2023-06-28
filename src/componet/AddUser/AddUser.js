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

    }
    const nameInputHandler = (event) => {
        setEnter(event.traget.value);
    }

    const lastInputHandler = (event) => {
        setlastEnter(event.traget.value);
    }
    const emailInputHandler = (event) => {
        setemailEnter(event.traget.value);
    }
    const passwordInputHandler = (event) => {
        setpasswordEnter(event.traget.value);
    }
    return (
        <Cartform>

            <form className={classes.form} onSubmit={formHandler}>
                <label htmlFor="name">Name</label>
                <input id="name" className={classes.input}></input>
                <label htmlFor="lastname">LastName</label>
                <input id="lastname" className={classes.input}></input>
                <label htmlFor="email">Email</label>
                <input id="email" className={classes.input}></input>
                <label htmlFor="password">Password</label>
                <input id="password" className={classes.input}></input>
                <Button>send</Button>

            </form>
        </Cartform>

    )

}
export default AddUser;