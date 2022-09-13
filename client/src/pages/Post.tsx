import React from 'react';

import { PostTitle } from '../components/PostTitle';

interface PostProps {
  text: string;
}

export const Post = ({ text }: PostProps) => {
  return (
    <div className="post-page-container">
      <PostTitle
        title="15 Disadvantages Of Freedom And How You Can Workaround It."
        email="@samurai2099"
        date="27 may 2022"
      />
      <p className="post-page-text">{text}</p>
    </div>
  );
};
