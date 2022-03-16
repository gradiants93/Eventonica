import React, { useState } from "react";

export default function Events() {
  const mockEvents = [
    {
      id: "1",
      name: "Birthday",
      date: "2021-09-01",
      description: "A birthday party for my best friend",
      category: "Celebration",
    },
    {
      id: "2",
      name: "Graduation",
      date: "2021-08-01",
      description: "The class of 2021 graduates from East High",
      category: "Education",
    },
    {
      id: "3",
      name: "JS Study Session",
      date: "2021-10-01",
      description: "A chance to practice Javascript interview questions",
      category: "Education",
    },
  ];

  const [events, setEvents] = useState(mockEvents);

  const listEvents = events.map(
    ({ name, id, description, date, category }, index) => (
      <li key={index}>
        ID: {id} Name:{name} Date: {date} Description: {description} Category:{" "}
        {category}
      </li>
    )
  );

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
            <label>Name</label>
            <input
              type="text"
              id="add-event-name"
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
