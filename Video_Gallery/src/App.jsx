import { useState, useEffect, useRef } from 'react';
import './App.css';
import videos from './videos';
import ReactPlayer from 'react-player';

function App()
{
  const galleryRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() =>
  {
    // Generate item structure with rows and associated videos
    const generateItems = () =>
    {
      const rows = [
        { id: 1, count: 4 },
        { id: 2, count: 3 },
        { id: 3, count: 4 },
      ];

      const newItems = rows.map((row) =>
        Array.from({ length: row.count }, (_, index) =>
        {
          const itemId = `${row.id}-${index}`;
          const video = videos.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video,
          };
        })
      );

      setItems(newItems);
    };

    generateItems();

    // Mouse movement handler for parallax effect
    const handleMouseMove = (e) =>
    {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;

      const sensitivity = 10;
      const deltaX = (clientX - centerX) / sensitivity;
      const deltaY = (clientY - centerY) / sensitivity;

      if (galleryRef.current)
      {
        galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
      }
    };

    const container = document.querySelector('.container');
    if (container)
    {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup mousemove event listener
    return () =>
    {
      if (container)
      {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="gallery" ref={galleryRef}>
        {items.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="row">
            {row.map((item) => (
              <div key={item.id} className="item">
                <div className="preview-img">
                  <img
                    src={item.video?.previewImg}
                    alt={item.video?.videoName || 'Preview'}
                  />
                </div>
                <p id="videoName">{item.video?.videoName}</p>
                <div className="video-wrapper">
                  {item.video && (
                    <ReactPlayer
                      url={`https://vimeo.com/${item.video.videoId}`}
                      controls={false}
                      autoPlay={false}
                      loop={true}
                      playing={true}
                      muted={true}
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
