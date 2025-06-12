import { Group } from "@mui/icons-material";
import { NavLink } from "react-router";
import { Observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { useAccount } from "../../lib/hooks/useAccount";
import MenuItemLink from "../shared/components/MenuItemLink";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#182a73] via-[#218aae] to-[#20a7ac]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and title */}
          <NavLink to="/" className="flex items-center gap-2 text-white">
            <Group fontSize="large" />
            <div className="relative">
              <h1 className="text-2xl font-bold">Reactivities</h1>
              <Observer>
                {() =>
                  uiStore.isLoading ? (
                    <div className="absolute -right-6 top-1.5">
                      <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : null
                }
              </Observer>
            </div>
          </NavLink>

          {/* Navigation links */}
          <div className="flex gap-4 text-white">
            <MenuItemLink to="/activities">Activities</MenuItemLink>
            <MenuItemLink to="/counter">Counter</MenuItemLink>
            <MenuItemLink to="/errors">Errors</MenuItemLink>
          </div>

          {/* User menu or auth links */}
          <div className="flex items-center text-white">
            {currentUser ? (
              <UserMenu />
            ) : (
              <>
                <MenuItemLink to="/login">Login</MenuItemLink>
                <MenuItemLink to="/register">Register</MenuItemLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
