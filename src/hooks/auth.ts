import { useRecoilState } from 'recoil';
import { User, userState } from '../states/auth';
import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';
import { auth } from '../firebase';

export const useUser = (): [User, () => Promise<void>] => {
  const [user, setUser] = useRecoilState(userState);
  const loginWithGoogle = async () => {
    const authProvider = new GoogleAuthProvider();
    await signInWithRedirect(auth, authProvider);

    const user = await getRedirectResult(auth)
      .then((result) => {
        if (!result) {
          return null;
        }

        return result.user;
      })
      .catch(() => null);

    setUser({ name: user?.displayName || null });
  };

  return [user, loginWithGoogle];
};
