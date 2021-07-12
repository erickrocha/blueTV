import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import './SlideShow.scss';

const SlideShow = props => {
  const { images } = props;

  const [position, setPosition] = useState(0);

  const onNext = () => {
    if (position === 2) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  const onPrior = () => {
    if (position === 0) {
      setPosition(2);
    } else {
      setPosition(position - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => onNext(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="SlideShow" className="SlideShow">
      <div className="slideshow-container">
        {images.map(img => (
          <div className={clsx(position === img.id ? 'show' : 'hide', 'fade')}>
            <div className="numbertext">1 / 3</div>
            <img src={img.path} style={{ width: '100%', height: '500px' }} alt={img.label} />
            <div className="text">{img.label}</div>
          </div>
        ))}

        <a className="prev" onClick={() => onNext()} href="#">
          &#10094;
        </a>
        <a className="next" onClick={() => onPrior()} href="#">
          &#10095;
        </a>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => setPosition(0)}></span>
        <span className="dot" onClick={() => setPosition(1)}></span>
        <span className="dot" onClick={() => setPosition(2)}></span>
      </div>
    </div>
  );
};

export default SlideShow;
