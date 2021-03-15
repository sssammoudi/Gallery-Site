import React, { Component, createContext } from "react";
import { auth, CreateDoc } from "../components/firebase_/index";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {};
  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await CreateDoc(userAuth);
      this.setState({ user });
    });
  };

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
