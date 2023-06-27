import classes from './Text.module.css'
const Text = (props) => {
    return (
        <div>
            <h2 className={classes.title}>Veniam, Quis</h2>
            <p className={ classes.text}>sed do eiusmod tempor incididunt ut<br></br>
                labore et dolore magna aliqua.
                Ut enim<br></br> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

        </div>
    )
}
export default Text;
