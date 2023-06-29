import { Fragment } from "react";
import Header from "./componet/UI/Header";
import SectionOne from "./componet/Section/SectionOne";
import AddUser from "./componet/AddUser/AddUser";
import UserList from "./componet/CheckFrom/UserList";
import { useState } from "react";
function App() {
  const [userdata, setdata] = useState([]);
  const userHadler = (name, lastname, email, password) => {
    setdata((datapast) => {
      return [...datapast, { name: name, lastname: lastname, email: email, password: password }];
    })

  }
  return (
    <Fragment>
      <Header />
      <SectionOne />
      <AddUser onAddUser={userHadler} />
      <UserList users={userdata} />

    </Fragment>

  );
}

export default App;
