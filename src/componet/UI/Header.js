import Button from './Button';
import classes from './Header.module.css';
const Header = () => {
    return (
        <div className={classes.head}>
            <div className={classes.content}>
                <div className={classes.title}>
                    
                </div>
                <Button>log in</Button>
            </div>
        </div>

    );
};

export default Header;
