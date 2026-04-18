import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { videos } from './videos';
import './App.css';

function App()
{
  const galleryRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() =>
  {
    const handleMouseMove = (e) =>
    {
      mousePos.current = {
        x: (e.clientX - window.innerWidth / 2) * 0.1,
        y: (e.clientY - window.innerHeight / 2) * 0.1
      };
    };

    const animate = () =>
    {
      // Smooth Interpolation Logic
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.05;

      if (galleryRef.current)
      {
        galleryRef.current.style.transform = `translate3d(${-currentPos.current.x}px, ${-currentPos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () =>
    {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="container">
      {/* STATIC INTERFACE LAYER */}
      <div className="system-hud">
        <h1>MEDIA<br /><span style={{ color: '#222' }}>GALLERY</span></h1>
      </div>

      {/* MOVING GALLERY LAYER */}
      <div className="gallery" ref={galleryRef}>
        {[0, 1, 2].map((rowIndex) => (
          <div className="row" key={rowIndex} style={{ marginLeft: rowIndex % 2 === 0 ? '0' : '100px' }}>
            {videos.filter(v => v.id.startsWith(rowIndex.toString())).map((item) => (
              <div className="item" key={item.id}>
                <img src={item.previewImg} className="preview-img" alt="" />

                <div className="item-info">
                  <p className="video-label">{item.videoName}</p>
                </div>

                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0 }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                  <ReactPlayer
                    url={`https://vimeo.com/${item.videoId}`}
                    playing={true} muted={true} loop={true} width="100%" height="100%"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ position: 'fixed', bottom: '40px', right: '40px', opacity: 0.2 }} className="mono">
        Status: Movement Engaged
      </div>
    </div>
  );
}

export default App;