import React from 'react';

interface PostTitleProps {
  title: string;
  email: string;
  date: string;
}

export const PostTitle = ({ title, email, date }: PostTitleProps) => {
  return (
    <div>
      <h1 className="post-page-title">{title}</h1>
      <h3 className="post-page-sub-title">
        written by {email}
        <br />
        on {date}
      </h3>
    </div>
  );
};
