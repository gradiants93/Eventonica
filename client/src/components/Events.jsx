import React, { useReducer, useState } from "react";

export default function Events() {
  // const variables
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
  // States
  const initialState = {
    id: "",
    name: "",
    date: null,
    description: "",
    category: "",
  };
  const [events, setEvents] = useState(mockEvents); // for mockState use

  // constant objects
  const listEvents = events.map(
    ({ name, id, description, date, category }, index) => (
      <li key={index}>
        ID: {id} Name: {name} Date: {date} Description: {description} Category:{" "}
        {category}
      </li>
    )
  );
  const reducer = (state, action) => {
    console.log(`The action is ${action} and the type is ${action.type}`);
    switch (action.type) {
      case editID:
        console.log(`Dispatched editID with ${action.payload}`);
        return { ...state, id: action.payload };
      case editName:
        console.log(`Dispatched editName with ${action.payload}`);
        return { ...state, name: action.payload };
      case editDate:
        console.log(`Dispatched editDate with ${action.payload}`);
        return { ...state, date: action.payload };
      case editDescription:
        console.log(`Dispatched editDescription with ${action.payload}`);
        return { ...state, description: action.payload };
      case editCategory:
        console.log(`Dispatched editCategory with ${action.payload}`);
        return { ...state, category: action.payload };
      default:
        console.log(`Action type is not a listed case. Type: ${action.type}`);
        return state;
    }
  };
  // Reducer things
  const EventForm = () => {
    const [events, setEvents] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    return <div>...</div>;
  };

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          {listEvents}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#">
          <fieldset>
            <label>ID</label>
            <input type="text" id="add-event-id" />
          </fieldset>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-event-name"
              placeholder="Virtual corgi meetup"
            />
          </fieldset>
          <fieldset>
            <label>Date</label>
            <input type="text" id="add-event-date" placeholder="2022-03-14" />
          </fieldset>
          <fieldset>
            <label>Description</label>
            <input
              type="text"
              id="add-event-Description"
              placeholder="Virtual corgi meetup"
            />
          </fieldset>
          <fieldset>
            <label>Category</label>
            <input
              type="text"
              id="add-event-category"
              placeholder="Virtual corgi meetup"
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
      </div>
    </section>
  );
}
