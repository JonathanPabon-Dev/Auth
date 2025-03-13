import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Email:", email);
      console.log("Pass:", password);
      setLoading(true);
      await signIn(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-[40%] min-w-60 max-w-md flex-col gap-3">
      <h2 className="text-center text-2xl">Sign In</h2>
      <p className="text-center">
        Don&apos;t you have an account?{" "}
        <Link
          to={"/SignUp"}
          className="text-blue-300 underline underline-offset-2"
        >
          Sign up!
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
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-md bg-slate-600 p-2 hover:bg-slate-700"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
