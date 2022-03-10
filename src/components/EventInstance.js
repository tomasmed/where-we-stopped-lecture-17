import './EventInstance.css';

// This exists as a simple example of a property that can have content
// inside it.
// This can be used like
// <EventInstance>
//   Whatever content, components/tags you want...
// </EventInstance>
// The stuff passed between the opening and closing tags of EventInstance
// are available here as `props.children`.
const EventInstance = (props) => {
    return <div className='event'>{props.children}</div>
}

export default EventInstance;