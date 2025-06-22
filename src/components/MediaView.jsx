import React from 'react';
import { useParams } from 'react-router-dom';
import { dogs } from '../data/dogs';

function MediaView() {
  const { dogId } = useParams();
  const dog = dogs.find(d => d.id === Number(dogId));

  if (!dog) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Dog not found</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>{dog.name}</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
      >
        {dog.media.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${dog.name} media ${idx + 1}`}
            style={{ maxWidth: '300px', borderRadius: '8px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
}

export default MediaView;
