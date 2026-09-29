import { useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';
import Post from '../components/Post';

const MAX_POST_LENGTH = 256;

const templateUser = {
  firstName: 'Александр',
  lastName: 'Хабаров',
  birthday: '19 ноября 1990',
};

const templatePosts = [
  {
    id: 1,
    date: '2026-09-15T10:10:00.000Z',
    title: 'Leha',
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    id: 2,
    date: '2026-09-15T10:10:00.000Z',
    title: 'Damn',
    text: 'Donec quam lectus, dignissim quis ultrices non, hendrerit volutpat arcu. Quisque id hendrerit massa, eget aliquam diam.',
  },
];

function Profile() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dialogRef = useRef(null);

  function handleTextChange(event) {
    const value = event.target.value;
    if (value.length <= MAX_POST_LENGTH) {
      setText(value);
      return;
    }
    const textArea = event.target;
    setText(value.slice(0, MAX_POST_LENGTH));
    textArea.value = value.slice(0, MAX_POST_LENGTH);
  }

  function publishPost(event) {
    event.preventDefault();
    const post = {
      title: title.trim(),
      text: text.replace(/\r?\n/g, '\\n').trim(),
      date: new Date().toISOString(),
    };
    console.log(JSON.stringify(post));
    dialogRef.current.close();
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar" aria-hidden="true">
          {templateUser.firstName.charAt(0)}
        </div>

        <div className="profile-info">
          <h1 className="profile-name">
            {templateUser.firstName} {templateUser.lastName}
          </h1>
          <p className="profile-birthday">День рождения: {templateUser.birthday}</p>
        </div>
      </div>

      <div className="profile-posts">
        <div className="posts-header">
          <h2 className="posts-title">Посты</h2>
          <button
            type="button"
            className="create-post-button"
            onClick={() => dialogRef.current.showModal()}
          >
            <Plus size={18} />
            Создать пост
          </button>
        </div>

        <div className="profile-posts-list">
          {templatePosts.map((post) => (
            <Post
              key={post.id}
              author={templateUser}
              title={post.title}
              text={post.text}
              date={post.date}
            />
          ))}
        </div>
      </div>

      <dialog ref={dialogRef} className="post-modal">
        <form className="post-modal-form" onSubmit={publishPost}>
          <div className="post-modal-header">
            <h2>Новый пост</h2>
            <button
              type="button"
              className="post-modal-close"
              onClick={() => dialogRef.current.close()}
              aria-label="Закрыть"
            >
              <X size={20} />
            </button>
          </div>

          <input
            type="text"
            className="post-modal-input"
            placeholder="Заголовок"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <textarea
            className="post-modal-textarea"
            placeholder="Что у Вас нового?"
            rows={6}
            value={text}
            onChange={handleTextChange}
          />

          <div className="post-modal-footer">
            <button type="submit" className="post-modal-submit">
              Опубликовать
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default Profile;
