import './EventDateTime.css';
// Luxon is a date/time library we added via `npm install luxon`, you'll see
// it in package.json. We import the DateTime utility from that library
import { DateTime } from 'luxon';

const EventDateTime = (props) => {
    // Converts military time to AM/PM with Luxon. Knowing how to use Luxon
    // specifically isn't a requirement of the class, this is here as an example
    // of bringing in an external library to address something your application
    // needs.
    function convert(input) {
        return DateTime
            .fromFormat(input, 'HH:mm:ss')
            .toLocaleString(DateTime.TIME_SIMPLE);
    }

    return(<div className='event__datetime'>
        <div className='event__date'>
            {props.dateStart}
        </div>
        <div className='event__start-end'>
            {/*
                We are calling convert() on timeStart and timeEnd props to
                change the umich default format to AM/PM
            */}
            { convert(props.timeStart) }-{ convert(props.timeEnd)}
        </div>
    </div>);
}

export default EventDateTime;