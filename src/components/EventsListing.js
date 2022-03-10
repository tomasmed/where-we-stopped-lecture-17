import './EventsListing.css';
import EventDateTime from "./EventDateTime";
import EventInfo from "./EventInfo";
import EventInstance from "./EventInstance";

const EventsListing = (props) => {
    // This is in the console so you can see that when App passes in
    // events as <EventsListing events={events} />, that `events`
    // data is here in props.events.
    console.log('THE PROPS', props);

    /**
     * Creates an array where each item is the JSX "markup" for an event.
     *
     * @returns {*[]}
     */
    const generateEvents = () => {
        // Initialize an empty array that will get each event
        const eventsToShow = [];

        // Loop through the event list. Add each event as new array item.
        // If React sees an array of JSX "markup", it will render each one.
        props.events.forEach((eventInstance, index) =>
            // Add an event's "markup" to the eventsToShow array.
            eventsToShow.push(<EventInstance key={index}>
                    <EventDateTime
                        dateStart={eventInstance.date_start}
                        timeStart={eventInstance.time_start}
                        timeEnd={eventInstance.time_end}
                    />
                   <EventInfo
                       title={eventInstance.event_title}
                       description={eventInstance.description}
                   />
                </EventInstance>
            )
        );

        return eventsToShow;
        // What is happening here could be done more concisely with JavaScripts's map()
        // function (so `props.events.map()`), but that can be harder to read
        // for those not used to it, so we're using forEach() and push() instead.
    }

    return (
        <div className='events'>
            {/*
               The events "markup" is generated in a function (above)
               to make this return statement easier to read.
            */}
            {generateEvents()}
        </div>
    );
}

export default EventsListing;