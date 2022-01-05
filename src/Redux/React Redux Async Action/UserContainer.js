import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./UserAction";

const UserContainer = ({ userData, fetchUser }) => {
  useEffect(() => {
    // console.log("effct used");
    fetchUser();
  }, []);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>UserList</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => {
            return <p key={user.id}>{user.name}</p>;
            {
              /* console.log(user.name); */
            }
          })}
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(UserContainer);
