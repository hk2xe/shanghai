import { Link } from 'react-router';
import { Heart, MessageCircle } from 'lucide-react';

function Post({ author, title, text, date }) {
  return (
    <article className="post-row">
      <div className="post-card">
        <Link to="/profile" className="post-user-info">
          <div className="post-user-avatar" aria-hidden="true">
            {author.firstName.charAt(0)}
          </div>
          <span className="post-user-name">
            {author.firstName} {author.lastName}
          </span>
        </Link>

        {title && <h3 className="post-title">{title}</h3>}
        <p className="post-text">{text}</p>

        <div className="post-footer">
          <button type="button" className="post-action">
            <Heart size={18} className="post-like" />
          </button>
          <button type="button" className="post-action">
            <MessageCircle size={18} />
          </button>
          <span className="post-date">{date}</span>
        </div>
      </div>
    </article>
  );
}

export default Post;
