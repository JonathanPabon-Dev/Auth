import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { session, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const result = await signOut();

      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <p className="text-3xl">
        Bienvenido <span className="text-blue-400">{session?.user?.email}</span>
      </p>
      <button
        className="mx-auto rounded-md border-2 border-red-400 px-4 py-2 hover:cursor-pointer hover:bg-red-400"
        onClick={handleSignOut}
      >
        Salir
      </button>
    </div>
  );
};

export default Dashboard;
