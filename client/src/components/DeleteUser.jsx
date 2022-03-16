import React, { useEffect, useState } from "react";

export default function DeleteUser({ givenID }) {
  const [deleteUserID, setDeleteUserID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    givenID(deleteUserID);
    setDeleteUserID("");
    // check delete user id state after it changes
    console.log(`Set id to be removed ${deleteUserID}`);
  };

  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#" onSubmit={handleSubmit}>
        <fieldset>
          <label>User ID</label>
          <input
            type="text"
            id="delete-user-id"
            value={deleteUserID}
            name="delete-user-id"
            onChange={(e) => {
              setDeleteUserID(e.target.value);
              //check to make sure it is taking input
              console.log(e.target.value);
            }}
          />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
}
