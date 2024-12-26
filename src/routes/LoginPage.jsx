import { SignIn, SignUp } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="auth">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
