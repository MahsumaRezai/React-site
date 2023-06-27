import { Fragment } from "react"
import SectionHead from "./SectionHead";
import classes from './SectionOne.module.css'
import Cart from "../Cart/Cart";

const SectionOne = (props) => {
    return (
        <Fragment>
            <main className={classes.main}>
                <SectionHead />
                <Cart/>

            </main>

        </Fragment>
    )
}
export default SectionOne;