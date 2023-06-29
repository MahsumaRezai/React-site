import { Fragment } from "react";
import Header from "./componet/UI/Header";
import SectionOne from "./componet/Section/SectionOne";
import AddUser from "./componet/AddUser/AddUser";
import UserList from "./componet/CheckFrom/UserList";
function App() {
  return (
    <Fragment>
      <Header />
      <SectionOne />
      <AddUser />
      <UserList users={[]} />

    </Fragment>

  );
}

export default App;
