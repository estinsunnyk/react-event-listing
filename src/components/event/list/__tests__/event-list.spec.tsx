import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { EventList } from '../event-list';
import { FIND_EVENT_TITLE, NO_EVENTS_FOUND_MESSAGE } from '../../constants';

describe('EventList Component', () => {
  it('render the page title', () => {
    render(<EventList />);
    expect(screen.getByText(FIND_EVENT_TITLE)).toBeInTheDocument();
  });

  it('display event name, date and location', () => {
    render(<EventList />);

    expect(screen.getByText('Blood Donation Drive')).toBeInTheDocument();
    expect(screen.getByText('London, UK')).toBeInTheDocument();

    const eventDate = screen.getAllByText(/\d{1,2} \w+ \d{4}/);
    expect(eventDate.length).toBeGreaterThan(0);
  });

  it('shows only upcoming events', () => {
    render(<EventList />);

    expect(screen.getByText('Blood Donation Drive')).toBeInTheDocument();
    // Should not show past events
    expect(screen.queryByText('Sleep Health Seminar')).not.toBeInTheDocument();
  });

  it('filters events by name', async () => {
    const user = userEvent.setup();
    render(<EventList />);

    const searchInput = screen.getByTestId('event-search-input');
    await user.type(searchInput, 'Mental Health');

    expect(screen.getAllByText('Mental Health Awareness Workshop').length).toBe(
      2
    );
    expect(screen.queryByText('Blood Donation Drive')).not.toBeInTheDocument();
  });

  it('filters events by location', async () => {
    const user = userEvent.setup();
    render(<EventList />);

    const searchInput = screen.getByTestId('event-search-input');
    await user.type(searchInput, 'London');

    expect(screen.getByText('Blood Donation Drive')).toBeInTheDocument();
    expect(
      screen.queryByText('Heart Health Check Event')
    ).not.toBeInTheDocument();
  });

  it('shows empty state when no events match', async () => {
    const user = userEvent.setup();

    render(<EventList />);

    const searchInput = screen.getByTestId('event-search-input');
    await user.type(searchInput, 'Event bla bla bla');

    expect(screen.getByText(NO_EVENTS_FOUND_MESSAGE)).toBeInTheDocument();
  });

  it('sort events by soonest date first', () => {
    render(<EventList />);

    const eventItems = screen.getAllByRole('listitem');

    // First event should be tomorrows's event as per the mock data
    const firstEventName = eventItems[0].textContent;

    expect(firstEventName).toContain('Blood Donation Drive');
  });

  it('update event count after filtering', async () => {
    const user = userEvent.setup();
    render(<EventList />);

    const searchInput = screen.getByTestId('event-search-input');
    await user.type(searchInput, 'blood');

    expect(screen.getByText(/Showing 1 of \d+ events/i)).toBeInTheDocument();
  });
});
