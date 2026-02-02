import { Logo } from "../Logo/Logo";
import { FaUser } from "react-icons/fa";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useAuth } from "../../context/auth/useAuth";

export const Header = () => {
  const user = useAuth();

  return (
    <div className="container   mb-8 mx-auto py-4 flex items-center justify-between ">
      <Logo />
      {user ? (
        <div className="flex items-center">
          <div className="flex items-center font-macpaw font-medium">
            {" "}
            {user.fullName}{" "}
          </div>
          <div className="ml-3 bg-emerald-200 w-8 h-8 flex items-center justify-center rounded-full">
            <FaUser color="#FCFCFCB3" />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <BurgerMenu />
    </div>
  );
};
