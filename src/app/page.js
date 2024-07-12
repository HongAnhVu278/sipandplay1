"use client"; // Mark this component as a client component

import Link from 'next/link';
import Image from 'next/image';
import bgImage from '../app/background.jpg';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative container mx-auto px-6 py-20 text-white text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to Sip & Play!</h1>
        <p className="text-2xl mb-8">Enjoy board games, boba tea, and small bites in Park Slope, Brooklyn.</p>
        <div className="mt-10">
          <Link href="/events" legacyBehavior>
            <a className="inline-block bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Check out our events
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
