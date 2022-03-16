import React, { useReducer, useState } from "react";

/* TODO:
Add success message on event submission
Add date validation - must be in future
*/

const initialState = {
  id: "",
  name: "",
  date: "",
  description: "",
  category: "",
};

const reducer = (state, action) => {
  console.log(
    `The action is ${JSON.stringify(action)} and the type is ${action.type}`
  );
  switch (action.type) {
    case "editID":
      console.log(`Dispatched editID with ${action.payload}`);
      return { ...state, id: action.payload };
    case "editName":
      console.log(`Dispatched editName with ${action.payload}`);
      return { ...state, name: action.payload };
    case "editDate":
      console.log(`Dispatched editDate with ${action.payload}`);
      return { ...state, date: action.payload };
    case "editDescription":
      console.log(`Dispatched editDescription with ${action.payload}`);
      return { ...state, description: action.payload };
    case "editCategory":
      console.log(`Dispatched editCategory with ${action.payload}`);
      return { ...state, category: action.payload };
    case "resetForm":
      console.log("Reset state");
      return { id: "", name: "", date: "", description: "", category: "" };
    default:
      console.log(`Action type is not a listed case. Type: ${action.type}`);
      return state;
  }
};

export default function Events() {
  // Mock data/event use
  const mockEvents = [
    {
      id: "1",
      name: "Tzima Birthday",
      date: "2021-03-10",
      description: "Tzima turns 3!",
      category: "Celebration",
    },
    {
      id: "2",
      name: "Beginning of the End",
      date: "2021-06-27",
      description: "Last week of Techtonica :<",
      category: "Education",
    },
    {
      id: "3",
      name: "Mother's Day",
      date: "2021-05-13",
      description: "Celebrate all moms!",
      category: "Celebration",
    },
  ];
  // const [events, setEvents] = useState(mockEvents);

  // States
  const [events, setEvents] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  // constant actions/objects

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state != initialState) {
      const newEvent = state;
      setEvents([...events, newEvent]);
      dispatch({
        type: "resetForm",
      });
    }
  };

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          {events.length == 0 ? (
            <p>No events yet!</p>
          ) : (
            events.map(({ name, id, description, date, category }, index) => (
              <li key={index}>
                ID: {id} Name: {name} Date: {date} Description: {description}{" "}
                Category: {category}
              </li>
            ))
          )}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>ID</label>
            <input
              type="text"
              id="add-event-id"
              value={state.id}
              onChange={(e) =>
                dispatch({ type: "editID", payload: e.target.value })
              }
              required
            />
          </fieldset>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-event-name"
              value={state.name}
              placeholder="Name your event"
              onChange={(e) =>
                dispatch({ type: "editName", payload: e.target.value })
              }
              required
            />
          </fieldset>
          <fieldset>
            <label>Date</label>
            <input
              type="text"
              id="add-event-date"
              placeholder="2022-03-14"
              value={state.date}
              onChange={(e) =>
                dispatch({ type: "editDate", payload: e.target.value })
              }
              required
            />
          </fieldset>
          <fieldset>
            <label>Description</label>
            <input
              type="text"
              id="add-event-Description"
              placeholder="Virtual corgi meetup"
              value={state.description}
              onChange={(e) =>
                dispatch({ type: "editDescription", payload: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <label>Category</label>
            <input
              type="text"
              id="add-event-category"
              placeholder="Virtual"
              value={state.category}
              onChange={(e) =>
                dispatch({ type: "editCategory", payload: e.target.value })
              }
              required
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
        <button
          id="reset-add-event"
          onClick={(e) =>
            dispatch({
              type: "resetForm",
            })
          }
        >
          Reset Form
        </button>
      </div>
      <div>
        <h4>Current State:</h4>
        {/* Show state for visual debugging */}
        {JSON.stringify(state, null, 2)}
      </div>
    </section>
  );
}
