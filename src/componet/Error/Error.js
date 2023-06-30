import classes from './Error.module.css';
import Button from "./Button";
import Card from "./Card";

const Error = (props) => {
    return (
        <div> 
            <div className={classes.backdrop} onClick={props.onClick}/>
            <Card>

                <header className={classes.header}>
                    <h1>{props.title}</h1>
                </header>
                <div className={classes.content}>
                    <p>{props.massage}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClick}>Okay</Button>
                </footer>

            </Card>

        </div>
    )
}
export default Error;