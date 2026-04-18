import React from 'react';
import Car from './Car';
import './index.css';

export default function App()
{
  // Dynamic Date Generation for Real-time Property Injection
  const timestamp = new Date();
  const currentMonth = timestamp.toLocaleString('default', { month: 'long' });
  const currentDay = timestamp.getDate();

  // Data Definitions: Prop Values for Child Component
  const brandIdentity = "Mercedes-AMG Performance";
  const technicalSpecs = {
    modal: "GT 63 S E Performance",
    price: "$194,900.00"
  };

  return (
    <div className="lab-wrapper">
      <header style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
          Prop_Foundation<span style={{ color: 'var(--accent)' }}>.Orchestrator</span>
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
          Uni-directional Data Flow & Property Injection Lab
        </p>
      </header>

      <Car
        color="Magno Selenite Grey"
        brand={brandIdentity}
        carInfo={technicalSpecs}
        month={currentMonth}
        date={currentDay}
      />

      <footer style={{ marginTop: '24px', textAlign: 'center', fontSize: '10px', color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        System_Status: Property_Transmission_Verified
      </footer>
    </div>
  );
}