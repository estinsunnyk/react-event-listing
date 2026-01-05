import { useMemo, useState } from 'react';
import { Typography } from '../../../lib/typography';
import { formatDate } from '../../../utils';
import { events } from '../../../data/events';
import type { Event } from '../types';
import styles from './event-list.module.css';

export function EventList() {
  const [searchString, setSearchString] = useState('');

  // Get only upcoming events
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    });
  }, [events]);

  // Filter and Sort events
  const filteredEvents = useMemo(() => {
    // Filter by search string
    const filterBySearchString = (eventList: Event[]): Event[] => {
      if (!searchString) return eventList;

      const searchStrLower = searchString.toLowerCase();
      return eventList.filter(
        (event) =>
          event.name.toLowerCase().includes(searchStrLower) ||
          event.location.toLowerCase().includes(searchStrLower)
      );
    };

    // Sort by date (soonest first)
    const sortByDate = (eventList: Event[]): Event[] => {
      return [...eventList].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateA.getTime() - dateB.getTime();
      });
    };

    const searchedEvents = filterBySearchString(upcomingEvents);

    return sortByDate(searchedEvents);
  }, [searchString]);

  return (
    <div className={styles['event-list-wrap']}>
      <Typography
        variant="title"
        as="h2"
        className={styles['event-list-heading']}>
        Find Your Event
      </Typography>
      <div className={styles['event-list-search']}>
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          area-label="Search events by name or location"
          className={styles['event-list-search-input']}
        />
      </div>
      {filteredEvents.length === 0 ? (
        <div
          className={styles['event-list-empty']}
          role="status"
          aria-live="polite">
          <Typography variant="body">No events found!</Typography>
        </div>
      ) : (
        <ul className={styles['event-list']} role="list">
          {filteredEvents.map((event: Event) => (
            <li key={event.id}>
              <article className={styles['event-item']}>
                <Typography
                  variant="subtitle"
                  as="h3"
                  className={styles['event-item-name']}>
                  {event.name}
                </Typography>
                <Typography
                  variant="body"
                  className={styles['event-item-date']}>
                  {formatDate(event.date)}
                </Typography>
                <Typography
                  variant="body"
                  className={styles['event-item-location']}>
                  {event.location}
                </Typography>
              </article>
            </li>
          ))}
        </ul>
      )}
      <div
        role="status"
        aria-live="polite"
        className={styles['event-pagination']}>
        <Typography variant="caption">
          Showing {filteredEvents.length} of {upcomingEvents.length} events
        </Typography>
      </div>
    </div>
  );
}
