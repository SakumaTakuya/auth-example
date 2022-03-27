import type { NextPage } from 'next';
import { useUser } from '../hooks/auth';

const Home: NextPage = () => {
  const [user, login] = useUser();

  return (
    <>
      <p>user: {user.name ?? 'Anonymous'}</p>
      <button className="p-1" onClick={login}>
        login
      </button>
    </>
  );
};

export default Home;
