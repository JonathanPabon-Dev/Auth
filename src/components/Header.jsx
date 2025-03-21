import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Header = () => {
  const [firstName, setFirstName] = useState(null);
  const { signOut, user } = useAuth();
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

  useEffect(() => {
    if (user?.name) {
      const firstName = user.name.split(" ")[0];
      setFirstName(firstName);
    }
  }, [user]);

  return (
    <>
      <header className="flex items-center justify-between bg-slate-700 px-4 py-2 text-white">
        <div className="ml-auto flex items-center gap-5">
          <span className="font-semibold text-slate-200">
            {firstName || user.email}
          </span>
          <div className="size-12">
            <img
              className="size-full rounded-full object-cover"
              src={
                user.avatar ||
                "https://img.freepik.com/free-vector/cute-robot-working-laptop-cartoon-vector-icon-illustration-science-technology-isolated-flat_138676-11815.jpg?t=st=1742585083~exp=1742588683~hmac=af85d1ca41d1e5395e6eba1e157db9df7e3a71cc02c3e01eeb7733c1b0855fd0&w=740"
              }
            />
          </div>
          <button
            onClick={handleSignOut}
            className="size-8 rounded font-bold text-slate-200 transition-colors hover:bg-red-600"
          >
            <FontAwesomeIcon icon={faSignOut} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
