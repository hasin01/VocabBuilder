// BurgerMenu.jsx
import { useEffect, useRef, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Banner } from "../Banner/Banner";
import { IoArrowForwardSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { logOut } from "../../auth/services/signoutservices";
import { useAuth } from "../../context/useAuth";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);
  const user = useAuth();



  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div>
      <button
        ref={btnRef}
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 "
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <CgMenuRightAlt size={32} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0  backdrop-blur-sm  bg-opacity-40 md:hidden"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={`flex flex-col justify-between fixed top-0 right-0 h-full w-64 bg-buttonColor shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center  justify-between px-4 py-3  ">
          {user ? (
            <div className= "flex items-center text-[#FCFCFC] font-medium text-[20px] leading-[24px] text-left font-fixeltext-white font-medium text-lg leading-6 text-left font-fixel">
              {user.fullName}
                  <div className="bg-white ml-3 w-8 h-8 flex items-center justify-center rounded-full ">
            <FaUser color="#85AA9F    " />
          </div>
            </div>
            

          ) : (
            <div></div>
          )}
                  
          <button
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <RxCross2 color="white" size={25} />
          </button>
        </div>
        <nav className="flex flex-col items-start  space-y-4 px-4 py-6 text-gray-700 font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-[15px] bg-white px-2 py-2 "
                : "text-white font-medium text-sm leading-5 text-left font-fixel"
            }
            to="/VocabBuilder/dictionary"
          >
            Dictionary
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-[15px] bg-white px-2 py-2"
                : "text-white font-medium text-sm leading-5 text-left font-fixel"
            }
            to="/VocabBuilder/recommend"
          >
            Recommend
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-[15px] bg-white px-2 py-2"
                : "text-white font-medium text-sm leading-5 text-left font-fixel"
            }
            to="/VocabBuilder/training"
          >
            Training
          </NavLink>
          {user ? <button className="flex items-center" onClick={()=>logOut()}>
            <div className=" text-white font-medium text-sm leading-5 text-left font-fixel">
            Log out
              </div>
            <GoArrowRight className="ml-1" color="white"/>
        
          </button>: <></>}
          
        </nav>
      <Banner/>

      </div>
    </div>
  );
}
