import { Link } from "react-router-dom";
import { useState } from "react";
import Logoicon from "../../../assets/Logo.png";
import Profileicon from "../../../assets/Profile.png";
import Tooltipicon from "../../../assets/Tooltip.png";

function DashboardHeader() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleTooltip = () => setTooltipOpen((prev) => !prev);

  return (
    <header className="fixed top-0 z-[200] w-full transition-all duration-500 ease-in-out">
      <div className="bg-white text-[#133970] h-12 flex items-center justify-between px-[3%] shadow-md">
        {/* Logo + Title */}
        <div className="flex items-center">
          <img
            src={Logoicon}
            alt="Logo"
            className="w-[50px] sm:w-[60px] md:w-[70px]"
          />
          <h3 className="text-xs sm:text-sm md:text-[13px] ml-[-10px]">
            Enhancify.AI
          </h3>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="#"
            className="text-xs sm:text-[12px] md:text-[13px] font-semibold hover:text-[#8c9bf0] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-xs sm:text-[12px] md:text-[13px] font-semibold hover:text-[#8c9bf0] transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-xs sm:text-[12px] md:text-[13px] font-semibold hover:text-[#8c9bf0] transition-all duration-300"
          >
            Contacts
          </Link>

          {/* Upgrade Button */}
          <Link to="">
            <button className="text-[10px] sm:text-[10px] font-semibold text-white bg-[#133970] rounded-full px-2 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1 my-2">
              Upgrade Plan
            </button>
          </Link>

          {/* Profile + Tooltip */}
          <div className="flex items-center space-x-1">
            <img
              src={Profileicon}
              alt="User Profile"
              className="w-[28px] sm:w-[32px] md:w-[35px] cursor-pointer"
            />

            <div className="relative">
              <img
                src={Tooltipicon}
                alt="Tooltip Icon"
                className="w-[10px] cursor-pointer"
                onClick={toggleTooltip}
              />

              {tooltipOpen && (
                <div className="absolute top-[30px] right-0 mt-2 bg-[#f6efef] border border-[#1d3989] rounded-md w-[100px] py-1 z-[200]">
                  <ul className="text-xs sm:text-[13px]">
                    <li className="px-3 py-2 hover:text-[#8c9bf0]">
                      <Link to="/profile" onClick={() => setTooltipOpen(false)}>
                        Profile
                      </Link>
                    </li>
                    <li className="px-3 py-2 hover:text-[#8c9bf0]">
                      <Link to="/settings" onClick={() => setTooltipOpen(false)}>
                        Settings
                      </Link>
                    </li>
                    <li className="px-3 py-2 hover:text-[#8c9bf0]">
                      <Link to="/website" onClick={() => setTooltipOpen(false)}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default DashboardHeader;
