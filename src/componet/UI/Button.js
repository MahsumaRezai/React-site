import classes from './Button.module.css'
const Button = (props) => {
    return (
        <div>
            <button className={classes.btn}>{props.children}</button>
        </div>
    )
}
export default Button;