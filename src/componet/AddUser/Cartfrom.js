import classes from './Cartform.module.css'
const Cartform=(props)=>{
    return(
        <div className={classes.cart}>{props.children}

        </div>
    )
}
export default Cartform;