import React, { useState } from 'react';
import Notification from './components/Notification';

const App = () =>
{
  const [isLogged, setIsLogged] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [userRole, setUserRole] = useState('OPERATOR');
  const [alert, setAlert] = useState(null);

  const triggerBoot = () =>
  {
    setIsBooting(true);
    setTimeout(() =>
    {
      setIsLogged(true);
      setIsBooting(false);
      setAlert({ msg: "Neural_Link_Established", type: "success" });
    }, 1500);
  };

  const handleLogout = () =>
  {
    setIsLogged(false);
    setAlert({ msg: "Session_Terminated", type: "danger" });
  };

  return (
    <div className="dashboard-wrapper">
      {/* LEFT SIDE: CONTROL HUB */}
      <aside className="control-hub">
        <div>
          <h1>CORE<br /><span style={{ color: '#444' }}>SWITCH</span></h1>
        </div>

        <div className="interaction-zone">
          {!isLogged ? (
            <div>
              {isBooting ? (
                <div style={{ textAlign: 'center' }}>
                  <p className="mono" style={{ marginBottom: '15px', color: 'var(--go-green)' }}>Initializing...</p>
                  <div className="boot-loader"><div className="boot-progress"></div></div>
                </div>
              ) : (
                <>
                  <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px', lineHeight: '1.6' }}>
                    Access restricted. Secure biometrics or manual handshake required.
                  </p>
                  <button className="btn-core btn-pink" onClick={triggerBoot}>Initialize</button>
                </>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <button className="btn-outline" onClick={() =>
              {
                setUserRole(userRole === 'OPERATOR' ? 'ARCHITECT' : 'OPERATOR');
                setAlert({ msg: "Permissions_Updated", type: "warning" });
              }}>
                Swap_Privileges
              </button>
              <button className="btn-core" style={{ background: 'var(--security-red)', color: '#000' }} onClick={handleLogout}>
                Terminate
              </button>
            </div>
          )}
        </div>

        <div className="mono" style={{ opacity: 0.2, fontSize: '10px' }}>
          STATUS: {isLogged ? 'ENCRYPTED' : 'LOCKED'}
        </div>
      </aside>

      {/* RIGHT SIDE: VISUAL STAGE */}
      <main className="visual-stage">
        {isLogged ? (
          <div style={{ animation: 'fadeIn 0.8s ease' }}>
            <div style={{ marginBottom: '50px' }}>
              <p className="mono" style={{ color: 'var(--go-green)' }}>Handshake_Verified</p>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>User Dashboard</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div className="module-card module-orange">
                <p className="mono" style={{ color: 'var(--warning-orange)' }}>Network_Flow</p>
                <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>Latency: <span style={{ color: 'var(--warning-orange)' }}>12ms</span></p>
              </div>

              <div className="module-card module-green">
                <p className="mono" style={{ color: 'var(--go-green)' }}>Environment_Health</p>
                <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>Status: <span style={{ color: 'var(--go-green)' }}>Optimal</span></p>
              </div>

              {userRole === 'ARCHITECT' ? (
                <div className="module-card module-pink" style={{ gridColumn: 'span 2' }}>
                  <p className="mono" style={{ color: 'var(--action-pink)' }}>Elevated_Control</p>
                  <p style={{ marginTop: '10px', fontSize: '1.3rem', fontWeight: '600' }}>Root access active. Node clustering and database purging enabled.</p>
                </div>
              ) : (
                <div className="module-card" style={{ gridColumn: 'span 2', borderColor: '#222' }}>
                  <p className="mono" style={{ color: '#444' }}>Limited_Console</p>
                  <p style={{ color: '#444' }}>Standard operator permissions. Read-only mode.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="mono" style={{ color: '#111', fontSize: '5rem', fontWeight: '900' }}>WAITING_FOR_KEY</p>
          </div>
        )}
      </main>

      {/* NOTIFICATION PORTAL */}
      {alert && (
        <Notification
          msg={alert.msg}
          type={alert.type}
          onClear={() => setAlert(null)}
        />
      )}
    </div>
  );
};

export default App;