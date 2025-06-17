import { useState, useEffect, useRef } from 'react';
import './App.css';
import videos from './videos';
import ReactPlayer from 'react-player';

function App()
{
  const galleryRef = useRef(null);
  const containerRef = useRef(null);
  const [items, setItems] = useState([]);

  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

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

    const sensitivity = 20;

    const handleMouseMove = (e) =>
    {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      mousePos.current.x = (e.clientX - centerX) / sensitivity;
      mousePos.current.y = (e.clientY - centerY) / sensitivity;
    };

    const animate = () =>
    {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.1;

      if (galleryRef.current)
      {
        galleryRef.current.style.transform = `translate(calc(-50% + ${currentPos.current.x}px), calc(-50% + ${currentPos.current.y}px))`;
      }

      requestAnimationFrame(animate);
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    animate(); // Start animation loop

    return () =>
    {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
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
