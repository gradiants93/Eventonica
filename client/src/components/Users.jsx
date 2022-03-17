import React, { useEffect, useState } from "react";
import DeleteUser from "./DeleteUser";

/* TODO
  Add a delete user from server
*/

export default function Users() {
  // const mockUsers = [
  //   { name: "Marlin", email: "marlin@gmail.com", id: "1" },
  //   { name: "Nemo", email: "nemo@gmail.com", id: "2" },
  //   { name: "Dory", email: "dory@gmail.com", id: "3" },
  // ];

  const [users, setUsers] = useState([]);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // grab users from server(db?)
  const getUsers = () => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((jsonRes) => setUsers(jsonRes.users));
  };
  // add user to db
  const addUser = async (userToAdd) => {
    setUsers([...users, userToAdd]);
    await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "cors",
      },
      body: JSON.stringify(userToAdd),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => console.log("Success: ", data))
      .catch((err) => console.error("There was a boo boo: ", err));
  };

  // delete user from db
  const deleteUser = () => {};

  // set users to be api call result
  useEffect(() => {
    getUsers();
  }, []);

  const listUsers = users.map((user, index) => (
    <li key={index}>
      Id: {user.id} Name:{user.name} Email:{user.email}
    </li>
  ));

  const handleDeleteUser = (idToBeDeleted) => {
    const updatedUsers = users.filter(
      (individual) => individual.id !== idToBeDeleted
    );
    setUsers(updatedUsers);
    // check users state after deletion
    console.log(`Users updated after deleting`);
    console.log(users);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    await addUser(newUser);
    // setUsers([...users, newUser]);
    setEmail("");
    setID("");
    setName("");
  };

  // check id state after it changes
  useEffect(() => {
    console.log(id);
  }, [id]);
  // check name state after it changes
  useEffect(() => {
    console.log(name);
  }, [name]);
  // check email state after it changes
  useEffect(() => {
    console.log(email);
  }, [email]);
  // check users state after it changes
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {listUsers}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>ID:</label>
            <input
              type="text"
              id="add-user-id"
              value={id}
              name="id"
              required
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              value={name}
              name="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              type="text"
              id="add-user-email"
              value={email}
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>

      <DeleteUser givenID={handleDeleteUser} />
      <div>
        <h4>Current State:</h4>
        {/* Show state for visual debugging */}
        {JSON.stringify(users, null, 2)}
      </div>
    </section>
  );
}
