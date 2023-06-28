import classes from './Add.module.css'
import Button from './Button';
import Cartform from './Cartfrom';
const AddUser = (posp) => {
    return (
        <Cartform>

            <form className={classes.form}>
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