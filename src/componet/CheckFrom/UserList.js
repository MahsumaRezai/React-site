import Cartform from "../AddUser/Cartfrom";
import classes from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Cartform className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
          </li>
                ))}
            </ul>
        </Cartform>
    );
};

export default UsersList;