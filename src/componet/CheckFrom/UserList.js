import Cartform from "../AddUser/Cartfrom";
import classes from './UsersList.module.css';

const UsersList = (props) => {
    
    return (

        <Cartform >
             <ul className={classes.users}>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} {user.lastname} {user.email} {user.password}
                    </li>
                ))}
            </ul>
            
        </Cartform>
    );
};

export default UsersList;