import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignUp = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Email:", email);
      console.log("Pass:", password);
      setLoading(true);
      await signUp(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div className="mx-auto flex w-[40%] min-w-60 max-w-md flex-col gap-3">
      <h2 className="text-center text-2xl">Sign Up</h2>
      <p className="text-center">
        Already have an account?{" "}
        <Link
          to={"/SignIn"}
          className="text-blue-300 underline underline-offset-2"
        >
          Sign in!
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <input
            placeholder="Email"
            className="mt-4 rounded-md p-3 outline-none dark:bg-slate-800"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            className="mt-4 rounded-md p-3 outline-none dark:bg-slate-800"
            type="password"
            onChange={(e) => setPasword(e.target.value)}
            required
          />
          <input
            placeholder="Confirm Password"
            className={`mt-4 rounded-md p-3 outline-none dark:bg-slate-800 ${
              confirmPassword && !passwordsMatch
                ? "border-2 border-red-500"
                : passwordsMatch
                  ? "border-2 border-green-500"
                  : ""
            }`}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading || !passwordsMatch}
            className={`mt-4 w-full rounded-md bg-slate-600 p-2 ${loading || !passwordsMatch ? "cursor-not-allowed opacity-50" : "hover:bg-slate-700"}`}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
