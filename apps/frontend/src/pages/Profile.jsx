import Post from '../components/Post';

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
        <h2 className="posts-title">Посты</h2>

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
    </div>
  );
}

export default Profile;
