import classes from './Cart.module.css';
import imgOne from '../image/service1.jpg'
import { Fragment } from 'react';
import Text from './Text'
import Button from '../Button/Button';
const Cart = (props) => {
    return (
        <Fragment>

            <div className={classes.cart}>
                <img className={classes.img} src={imgOne} alt='' />
                <Text/>
                <Button/>


            </div>
        </Fragment>

    )
}
export default Cart;