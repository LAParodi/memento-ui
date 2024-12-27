import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="auth">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RegisterPage;
