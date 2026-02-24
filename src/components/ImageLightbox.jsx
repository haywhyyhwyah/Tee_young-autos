import React, { useEffect } from 'react';
import './ImageLightbox.css';

const ImageLightbox = ({ images = [], index = 0, onClose = () => {}, onPrev = () => {}, onNext = () => {} }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  const safeIndex = Math.max(0, Math.min(index, images.length - 1));

  return (
    <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="lightbox-content" role="dialog" aria-modal="true">
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>

        <img src={images[safeIndex]} alt={`Image ${safeIndex + 1}`} className="lightbox-img" />

        {images.length > 1 && (
          <>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">‹</button>
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">›</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
