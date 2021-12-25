import React, { Component } from "react";
import A from "./A";
import { UserProvider } from "./UserContext";

class App extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Apurv">
          <A />
        </UserProvider>
      </div>
    );
  }
}

export default App;
