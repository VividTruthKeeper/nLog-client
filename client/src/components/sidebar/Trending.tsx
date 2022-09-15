import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import trendingGreen from '../../assets/icons/trending_green.svg';

export const Trending = () => {
  return (
    <Link to="/sidebar" className="trending-wrapper">
      <div className="trending-img">
        <img src={trendingGreen} alt="trend" />
      </div>
      <h3 className="trending-text">trending</h3>
    </Link>
  );
};
