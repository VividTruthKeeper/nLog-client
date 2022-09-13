// Types
interface Props {
  title: string;
  email: string;
  date: string;
}

export const PostTitle = ({ title, email, date }: Props) => {
  return (
    <section className="post-page-title-wrapper">
      <h1 className="post-page-title">{title}</h1>
      <div className="post-page-sub-title-wrapper">
        <h3 className="post-page-sub-title">
          written by{" "}
          <a href="/" rel="noreferrer noopener">
            {email}
          </a>
        </h3>
        <h3 className="post-page-sub-title">on {date}</h3>
      </div>
    </section>
  );
};
