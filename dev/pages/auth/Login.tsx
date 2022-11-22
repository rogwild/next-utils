import React from "react";
import { useGetMeQuery } from "../../redux/services/backend/profiles";

const Login = () => {
  const { data: me } = useGetMeQuery({});
  console.log(`🚀 ~ Login ~ me`, me);

  return <div>Login</div>;
};

export default Login;
