import { atom, DefaultValue } from "recoil";

interface AuthState {
  isLoggedIn: boolean;
}

const persistAuthState =
  (
    key: string,
  ): (({
    setSelf,
    onSet,
  }: {
    setSelf: (newValue: AuthState | DefaultValue) => void;
    onSet: (
      callback: (newValue: AuthState | DefaultValue, oldValue: AuthState | DefaultValue) => void,
    ) => void;
  }) => void) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (!(newValue instanceof DefaultValue)) {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

const authState = atom<AuthState>({
  key: "authState",
  default: {
    isLoggedIn: false,
  },
  effects_UNSTABLE: [persistAuthState("authState")],
});

export default authState;
