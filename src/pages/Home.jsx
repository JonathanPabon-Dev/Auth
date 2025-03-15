import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="m-auto flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-bold uppercase">Supabase React Auth</h1>
        <div className="flex gap-5">
          <button
            type="button"
            className="rounded-md border-2 border-slate-600 bg-slate-600 px-5 py-2 hover:bg-transparent"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </button>
          <button
            type="submit"
            className={`rounded-md border-2 border-slate-600 px-5 py-2 hover:bg-slate-600`}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
