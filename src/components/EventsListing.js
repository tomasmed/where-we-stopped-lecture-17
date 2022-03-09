import './EventsListing.css';
import EventDateTime from "./EventDateTime";

const EventsListing = (props) => {
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
            eventsToShow.push(<div className='event' key={index}>
                    <EventDateTime
                        dateStart={eventInstance.date_start}
                        timeStart={eventInstance.time_start}
                        timeEnd={eventInstance.time_end}
                    />
                    <div className='event__info'>
                        <h2>{eventInstance.event_title}</h2>

                        <div className='event__description'>
                            {eventInstance.description}
                        </div>
                    </div>
                </div>

            )
        );
        return eventsToShow;
    }

    return (
        <div className='events'>
            {generateEvents()}
        </div>
    );
}

export default EventsListing;