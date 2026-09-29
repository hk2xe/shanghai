import { Fragment, useState } from 'react';
import { Link } from 'react-router';
import { Heart, MessageCircle } from 'lucide-react';

function Post({ author, title, text, date }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  function handleLikeClick() {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  }

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
        <p className="post-text">
          {text.split('\\n').map((line, index, lines) => (
            <Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>

        <div className="post-footer">
          <button
            type="button"
            className={`post-action post-like-button${liked ? ' liked' : ''}`}
            onClick={handleLikeClick}
          >
            <Heart size={18} className="post-like" fill={liked ? 'currentColor' : 'none'} />
            {likes > 0 && <span>{likes}</span>}
          </button>
          <button
            type="button"
            className="post-action"
            onClick={() => setComments((prev) => prev + 1)}
          >
            <MessageCircle size={18} />
            {comments > 0 && <span>{comments}</span>}
          </button>
          {/*<span className="post-date">{date}</span>*/}
          <span className="post-date">две недели назад</span>
        </div>
      </div>
    </article>
  );
}

export default Post;
