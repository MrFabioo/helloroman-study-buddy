import axios from "axios";
import React from "react";

const widthEventsData = (WrappedComponent, group) => {
  return function WidthEventsDataWrapper() {
    const [event, setEvents] = React.useState([]);

    React.useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
    }, []);
    return <WrappedComponent event={event} />;
  };
};

export const DisplayEvents = (props) => {
  return <div>{console.log(props)}</div>;
};

export const DisplayEventsData = widthEventsData(DisplayEvents, "A");
