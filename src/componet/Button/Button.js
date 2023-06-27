import classes from './Button.module.css'
const Button = (props) => {
    return (
        <div className={classes.button}>
            {props.children}
            <button className={classes.btn}>Readme</button>
        </div>

    )
}
export default Button;