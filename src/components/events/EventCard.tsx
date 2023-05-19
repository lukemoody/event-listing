import { Link } from 'react-router-dom';
import { IsEventCard } from '../../types/EventTypes';
import { ReadonlyProps } from '../../types/UtilityTypes';
import { displayFormatedDate } from '../../common/helpers/dateFormat';

const EventCard = ({ event }: ReadonlyProps<IsEventCard>) => (
    <Link
        to={`/whats-on/events/${event.id}`}
        className="card"
    >
        {event.largeimageurl && event.eventname && (
            <img
                src={event.largeimageurl}
                alt={event.eventname}
            />
        )}
        <div className="card__content">
            {event.eventname && <h3 className="card__title">{event.eventname}</h3>}
            {event.description && <p className="card__description">{event.description}</p>}
            <ul className="card__list details-list">
                {event.venue.name && (
                    <li className="card__list-item details-list__item">
                        <div className="icon">
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rgi1mz"
                                focusable="false"
                                color="#181808"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="CalendarTodayIcon"
                            >
                                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
                            </svg>
                        </div>
                        {event.venue.name}
                    </li>
                )}
                {event.date && (
                    <li className="card__list-item details-list__item">
                        <div className="icon">
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rgi1mz"
                                focusable="false"
                                color="#181808"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="LocationOnIcon"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                            </svg>
                        </div>
                        {displayFormatedDate(event.date)}
                    </li>
                )}
            </ul>
        </div>
        <div className="card__action">
            <div className="button button--primary">View Details</div>
        </div>
    </Link>
);

export default EventCard;
