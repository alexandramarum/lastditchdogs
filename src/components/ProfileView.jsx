import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileView({ dog }) {
  const navigate = useNavigate();

  const goToMedia = () => {
    navigate(`/media/${dog.id}`);
  };

  return (
    <>
      <div
        className="profile-view"
        role="button"
        tabIndex={0}
        onClick={goToMedia}
        onKeyDown={e => { if (e.key === 'Enter') goToMedia(); }}
      >
        <img src={dog.pfp} alt={`${dog.name} profile`} />
        <div className="profile-text">
          <h2>{dog.name}</h2>
          <p>{dog.description}</p>
        </div>
        <div className="arrow-column">
          <button 
            aria-label={`View gallery for ${dog.name}`} 
            onClick={e => { e.stopPropagation(); goToMedia(); }}
          >
            &rarr;
          </button>
        </div>
      </div>

      <style>{`
            .profile-view {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.5rem;
            width: 66.66vw;
            max-width: 700px;
            background-color: #f9f9f9;
            margin: 1rem auto;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: transform 0.2s ease, background-color 0.2s ease;
            cursor: pointer; /* nice UX hint */
        }

        .profile-view:hover {
            transform: scale(1.03);
            background-color: #e0e0e0; /* slightly darker */
        }

        .profile-view img {
            width: 180px;
            height: 180px;
            object-fit: cover;
            border-radius: 4px;
            flex-shrink: 0;
            transition: transform 0.2s ease;
        }

        .profile-text {
          flex-grow: 1;
          text-align: left;
          padding-right: 2rem; /* padding between text and arrow */
        }

        .profile-text h2 {
          margin: 0 0 0.25rem 0;
        }

        .profile-text p {
          margin: 0;
          color: #555;
        }

        .arrow-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          min-width: 60px;
        }

        .see-more-label {
          font-size: 0.8rem;
          color: #888;
          user-select: none;
        }

        .profile-view button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          margin: 0;
        }

        @media (max-width: 600px) {
          .profile-view {
            width: 90vw;
          }
          .profile-view img {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </>
  );
}
