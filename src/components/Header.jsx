// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="title-link">
          <h1 className="title">Last Ditch Dog's</h1>
        </Link>
        <nav className="nav-links">
          <a 
            href="https://www.facebook.com/groups/1019448493423553/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a href="mailto:tiffanymarum@email.com">Email</a>
        </nav>
      </header>

      <style>{`
        .header {
          background-color: #fff;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .title-link {
          text-decoration: none;
        }

        .title {
          margin: 0;
          font-size: 1.75rem;
          color: #333;
        }

        .nav-links a {
          margin-left: 1rem;
          text-decoration: none;
          color: #0077cc;
          font-weight: 500;
        }

        .nav-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            margin-top: 0.5rem;
          }

          .nav-links a {
            margin-left: 0;
            margin-right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
