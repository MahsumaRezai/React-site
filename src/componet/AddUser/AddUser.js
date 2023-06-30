import classes from './Add.module.css'
import Button from './Button';
import Cartform from './Cartfrom';
import { Fragment, useState } from 'react';
import Error from '../Error/Error'
const AddUser = (props) => {
    const [nameEnter, setEnter] = useState('');
    const [lastnameEnter, setlastEnter] = useState('');
    const [emailEnter, setemailEnter] = useState('');
    const [passwordEnter, setpasswordEnter] = useState('');
    const [erro, setErro] = useState()

    const formHandler = (event) => {
        event.preventDefault();
        if (nameEnter.trim().length === 0 || lastnameEnter.trim() === 0 || emailEnter.trim() === 0 || passwordEnter.length < 5) {
            setErro({
                title: "add your information correct",
                massage: "Please save your infromation"
            })
            return;
        }
        // console.log(nameEnter, lastnameEnter, emailEnter, passwordEnter);
        props.onAddUser(nameInputHandler, lastnameEnter, emailEnter, passwordEnter);
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
    const erroHandler = () => {
        setErro(null)

    }
    return (
        <Fragment>

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
            {erro && <Error title={erro.title} massage={erro.massage} onClick={erroHandler} />}

        </Fragment>

    )

}
export default AddUser;