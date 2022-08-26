import type { NextPage } from 'next';

const Home: NextPage = () => {
  const postForm = () => {
    fetch('/api/post-form', {
      method: 'POST',
      body: JSON.stringify({
        email: 'yo@yo.com',
        password: 'yoooooo',
        passwordConfirm: 'yooooo',
      }),
    });
  };

  return (
    <>
      <h1>YO</h1>
      <button onClick={postForm}>Submit form</button>
    </>
  );
};

export default Home;
