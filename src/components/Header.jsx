import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Header = () => {
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
    <>
      <header className="flex items-center justify-between bg-slate-700 px-4 py-2 text-white">
        <div className="user-info">
          <p className="">
            Bienvenido{" "}
            <span className="text-blue-400">{session?.user?.email}</span>
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="size-8 rounded bg-red-500 font-bold text-white hover:bg-red-600"
        >
          <FontAwesomeIcon icon={faSignOut} />
        </button>
      </header>
    </>
  );
};

export default Header;
