import { useState, useEffect } from "react";
import DashboardHeader from "../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../Header and Sidebar/Sidebar/DasboardSidebar";
import Uploadicon from "../../assets/upload icon.png";
import UploadForm from "./Uploadform";

function Upload() {
  const [firstName, setFirstName] = useState("there");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/me", {
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setFirstName(data.name);
        } else {
          console.warn("Not logged in");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <main>
      <DashboardHeader />
      <DashboardSidebar />

      <section>
        <div
          className="fixed top-[4rem] xl:top-[6.2rem] left-[4rem] xl:left-[19rem]
                     w-[82%] xl:w-[73%] h-[15rem] xl:h-[32rem]
                     bg-[#eef3fb] border-2 border-[#2979ff] rounded-[10px]
                     flex flex-col items-center justify-center
                     transition-all duration-500 ease-in-out"
        >
            <img src={Uploadicon} alt="Upload icon" className="w-20 xl:w-50 absolute left-5 xl:left-15"/>
 

          <h1 className="text-[#133970] text-[12px] xl:text-[28px] font-medium">
            Hello, {firstName}!
          </h1>

          <h1 className="text-[#133970] text-[12px] xl:text-[28px] font-medium">
            Ready to boost your Resume?
          </h1>

          <UploadForm />

          <div className="text-[7px] xl:text-[13px] italic text-[#a7a7a7]">
            <p>
              Please note that AI can make mistakes. We recommend verifying the
              information provided.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Upload;
