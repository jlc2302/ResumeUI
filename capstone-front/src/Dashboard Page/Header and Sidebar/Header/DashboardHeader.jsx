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
      <div className="bg-white text-[#133970] sm:h-12 xl:h-15 flex items-center justify-between sm:px-[1rem] md:px-[2rem] shadow-md">

        {/* Logo + Title */}
        <div className="flex items-center">
          <img
            src={Logoicon}
            alt="Logo"
            className="sm:w-[60px] md:w-[70px] xl:w-[80px]"
          />
          <h3 className="sm:text-[12px] md:text-[13px] xl:text-[17px]">
            Enhancify.AI
          </h3>
        </div>

        {/* Navigation */}
        <nav className="flex items-center sm:gap-4 xl:gap-7">
          <Link
            to="#"
            className="sm:text-[12px] md:text-[13px] xl:text-[16px] font-semibold hover:text-[#8c9bf0] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="#"
            className="sm:text-[12px] md:text-[13px] xl:text-[16px] font-semibold hover:text-[#8c9bf0] transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="#"
            className="sm:text-[12px] md:text-[13px] xl:text-[16px] font-semibold hover:text-[#8c9bf0] transition-all duration-300"
          >
            Contacts
          </Link>

          {/* Upgrade Button */}
          <Link to="">
            <button className="sm:text-[11px] xl:text-[13px] font-semibold text-white bg-[#133970] rounded-full sm:px-3 md:px-3.5 xl:px-4.5 sm:py-1 xl:py-1.5">
              Upgrade Plan
            </button>
          </Link>

          {/* Profile + Tooltip */}
          <div className="flex items-center space-x-1">
            <img
              src={Profileicon}
              alt="User Profile"
              className="sm:w-[32px] xl:w-[43px] cursor-pointer"
            />

            <div className="relative">
              <img
                src={Tooltipicon}
                alt="Tooltip Icon"
                className="sm:w-[9px] md:w-[10px] xl:w-[11px] cursor-pointer"
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
