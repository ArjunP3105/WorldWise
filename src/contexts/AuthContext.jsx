import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
  name: "user",
  email: "user@example.com",
  password: "qwerty",
  avatar:
    "https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
};

const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("something went wrong");
  }
}

const initalState = {
  user: null,
  isAuthenticated: false,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);

  const { user, isAuthenticated } = state;

  function login(email, password) {
    if (!email || !password) return;
    if (email === FAKE_USER.email && password == FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context was used outside the AuthProvider");
  return context;
}

export { AuthProvider, useAuthContext };
