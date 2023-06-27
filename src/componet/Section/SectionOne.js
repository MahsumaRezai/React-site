import { Fragment } from "react"
import SectionHead from "./SectionHead";
import classes from './SectionOne.module.css'
import Cart from "../Cart/Cart";

const SectionOne = (props) => {
    return (
        <Fragment>
            <main className={classes.main}>
                <SectionHead />
                <div className={classes.content}>
                    <Cart />
                    <Cart />
                    <Cart />
                </div>



            </main>

        </Fragment>
    )
}
export default SectionOne;