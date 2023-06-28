import classes from './Add.module.css'
import Cartform from './Cartfrom';
const AddUser = (posp) => {
    return (
        <Cartform>

            <form className={classes.form}>
                <label htmlFor="name">Name</label>
                <input id="name"></input>
                <label htmlFor="lastname">LastName</label>
                <input id="lastname"></input>
                <label htmlFor="email">Email</label>
                <input id="email"></input>
                <label htmlFor="password">Password</label>
                <input id="password"></input>
                <button>sendme</button>

            </form>
        </Cartform>

    )

}
export default AddUser;