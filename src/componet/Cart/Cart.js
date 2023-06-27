import classes from './Cart.module.css';
import imgOne from '../image/service1.jpg'
const Cart=(props)=>{
    return(
        <div className={classes.cart}>
            <img  className={classes.img} src={imgOne} alt=''/>

        </div>
    )
}
export default Cart;