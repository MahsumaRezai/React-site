import { Fragment } from "react"
import SectionHead from "./SectionHead";
import classes from './SectionOne.module.css'

const SectionOne = (props) => {
    return (
        <Fragment>
            <main className={classes.main}>
                <SectionHead />

            </main>

        </Fragment>
    )
}
export default SectionOne;