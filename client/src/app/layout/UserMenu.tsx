import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { useAccount } from "../../lib/hooks/useAccount";
import { FaPlus, FaUser, FaKey, FaSignOutAlt } from "react-icons/fa";

export default function UserMenu() {
  const { currentUser, logoutUser } = useAccount();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 text-white text-base hover:underline focus:outline-none"
      >
        <img
          src={currentUser?.imageUrl}
          alt="user avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        {currentUser?.displayName}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 text-gray-700">
            <Link
              to="/createActivity"
              className="flex items-center px-4 py-2 hover:bg-gray-100"
              onClick={closeMenu}
            >
              <FaPlus className="mr-2" /> Create Activity
            </Link>
            <Link
              to={`/profiles/${currentUser?.id}`}
              className="flex items-center px-4 py-2 hover:bg-gray-100"
              onClick={closeMenu}
            >
              <FaUser className="mr-2" /> My Profile
            </Link>
            <Link
              to="/change-password"
              className="flex items-center px-4 py-2 hover:bg-gray-100"
              onClick={closeMenu}
            >
              <FaKey className="mr-2" /> Change Password
            </Link>
            <hr className="my-1" />
            <button
              onClick={() => {
                logoutUser.mutate();
                closeMenu();
              }}
              className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
