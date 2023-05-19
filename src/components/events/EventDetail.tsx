import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { displayFormatedDate } from '../../common/helpers/dateFormat';
import { EventContext } from '../../context/EventContext';
import { IsEventContext } from '../../types/EventTypes';
import Header from '../common/Header';
import ImageBanner from '../common/ImageBanner';
import ArtistLinks from '../artists/ArtistLinks';

function EventDetail() {
    const params = useParams();
    const { event, setEvent } = useContext(EventContext) as IsEventContext;

    useEffect(() => {
        const url = `https://www.skiddle.com/api/v1/events/${params.id}/?api_key=${process.env.REACT_APP_API_KEY}`;
        axios
            .get(url)
            .then(res => {
                setEvent({
                    ...event,
                    artists: res.data.results.artists,
                    eventname: res.data.results.eventname,
                    description: res.data.results.description,
                    MinAge: res.data.results.MinAge,
                    date: displayFormatedDate(res.data.results.date),
                    venue: {
                        name: res.data.results.venue.name,
                    },
                    largeimageurl: res.data.results.largeimageurl,
                    openingtimes: {
                        doorsclose: res.data.results.openingtimes.doorsclose,
                        doorsopen: res.data.results.openingtimes.doorsopen,
                        lastentry: res.data.results.openingtimes.lastentry,
                    },
                    isLoading: false,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />
            <ImageBanner
                src={event.largeimageurl}
                alt={event.eventname}
            />
            <section className="event container">
                <div className="event__details">
                    {event.eventname && <h1>{event.eventname}</h1>}
                    {event.description && <p>{event.description}</p>}
                    {event.artists.length !== 0 && <ArtistLinks artists={event.artists} />}
                </div>
                <div className="event__card">
                    {event.largeimageurl && event.eventname && (
                        <img
                            src={event.largeimageurl}
                            alt={event.eventname}
                        />
                    )}
                    <ul className="event__card-list details-list">
                        {event.venue.name && (
                            <li className="event__card-list-item details-list__item">
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
                            <li className="event__card-list-item details-list__item">
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
                                {event.date}
                            </li>
                        )}
                        <li className="event__card-list-item details-list__item">
                            <div className="icon">
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rgi1mz"
                                    focusable="false"
                                    color="#181808"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="AccessTimeIcon"
                                >
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                                </svg>
                            </div>
                            {event.openingtimes?.doorsopen} til {event.openingtimes?.doorsclose}
                            {event.openingtimes.lastentry && ' (Last entry '}
                            {event.openingtimes?.lastentry} {event.openingtimes.lastentry && ')'}
                        </li>
                        <li className="event__card-list-item details-list__item">
                            <div className="icon">
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rgi1mz"
                                    focusable="false"
                                    color="#181808"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="PersonIcon"
                                >
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                </svg>
                            </div>
                            Minimum Age {event.MinAge}+
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default EventDetail;
