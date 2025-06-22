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
    cursor: pointer;
  }

  .profile-view:hover {
    transform: scale(1.03);
    background-color: #e0e0e0;
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
    padding-right: 2rem;
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
      flex-direction: column;
      align-items: flex-start;
      width: 90vw;
      padding: 1rem;
    }

    .profile-view img {
      width: 100%;
      height: auto;
      max-height: 300px;
      margin-bottom: 0.75rem;
    }

    .profile-text {
      padding-right: 0;
      text-align: left;
      width: 100%;
    }

    .arrow-column {
      align-self: flex-end;
      margin-top: 0.5rem;
    }
  }
`}</style>

    </>
  );
}
