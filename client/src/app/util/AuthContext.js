import React, {createContext} from "react";

const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: (auth) => {},
  user: {},
  setUser: () => {},
});




export {AuthContext}