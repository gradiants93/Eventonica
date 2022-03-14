import React from "react";

export default function Users() {
  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        <li>...</li>
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#">
          <fieldset>
            <label>Name</label>
            <input type="text" id="add-user-name" />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>

      <div>
        <h3>Delete User</h3>
        <form id="delete-user" action="#">
          <fieldset>
            <label>User ID</label>
            <input type="text" id="delete-user-id" />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    </section>
  );
}
