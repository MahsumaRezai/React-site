import { Fragment } from "react";
import Header from "./componet/UI/Header";
import SectionOne from "./componet/Section/SectionOne";
import AddUser from "./componet/AddUser/AddUser";
function App() {
  return (
    <Fragment>
      <Header />
      <SectionOne/>
      <AddUser/>
      
    </Fragment>

  );
}

export default App;
