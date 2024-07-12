"use client"; // Mark this component as a client component

import bgImage from '../background.jpg';
import EventsCalendar from '../../components/Calendar';
import styles from '../../styles/Events.module.css';

export default function Events() {
  return (
    <div className={`relative min-h-screen bg-cover bg-center ${styles.eventsPage}`} style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative container mx-auto px-6 py-20 text-white text-center">
        <h1 className="text-6xl font-bold mb-4">Our Events</h1>
        <p className="text-2xl mb-8">Check out our upcoming events and join us for fun!</p>
        <div className="flex justify-center mt-10">
          <EventsCalendar />
        </div>
      </div>
    </div>
  );
}


