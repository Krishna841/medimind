import "./calendar.scss";
import { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

//date with time example
// const events = [
//   {
//     title: "event 1",
//     date: "2023-03-01T12:00:00",
//   },
// ];

// function to add event

const CalendarCompo = () => {
  const [events, setEvents] = useState({
    title: "one",
    date: "2021-03-01",
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addEvent = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const date = event.target[1].value;
    const newEvent = {
      title: title,
      date: date,
    };
    setEvents([...events, newEvent]);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };
  return (
    <div className="calendar">
      <div className="addevent">
        <div className="addevent_title">Add Event</div>
        <form>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button type="submit" onClick={addEvent}>
            Add
          </button>
        </form>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        // weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default CalendarCompo;
