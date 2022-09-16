// Modules
import { Link } from "react-router-dom";

// Interfaces
interface articleProps {
    date: number;
    author: string;
    title: string;
    text: string;
    tags: [
        tag: string,
    ]
}

const Article = () => {
  return (
    <div className="article-wrapper">
        <div className="article-sidebar">
            <h2 className="article-date">27 may</h2>
            <Link to="/home" className="article-author">@samurai2099</Link>
        </div>
        <div className="article-content">
            <h2 className="article-title">15 Disadvantages Of Freedom And How You Can Workaround It.</h2>
            <p className="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
            <Link to="/home" className="article-tag">#meditation</Link>
        </div>
    </div>
  )
}

export default Article;