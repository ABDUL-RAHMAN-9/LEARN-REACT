import React from 'react';

const AirQualityHUD = ({ data }) =>
{
    const stats = [
        { n: "Carbon_Monoxide", v: data.co, c: "#ffab2e" },
        { n: "Nitrogen_Dioxide", v: data.no2, c: "#2e90ff" },
        { n: "Ozone_Layer", v: data.o3, c: "#ff2ebc" }
    ];

    return (
        <div style={{ marginTop: '50px', borderTop: '1px solid #1a1a1a', paddingTop: '40px' }}>
            <p className="mono" style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Sensor_Telemetry_Readout</p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {stats.map(s => (
                    <div key={s.n} style={{ textAlign: 'center' }}>
                        <p className="mono" style={{ fontSize: '8px', color: s.c, marginBottom: '10px' }}>{s.n}</p>
                        <p style={{ fontSize: '1.2rem', fontWeight: '800' }}>{Math.round(s.v)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AirQualityHUD;