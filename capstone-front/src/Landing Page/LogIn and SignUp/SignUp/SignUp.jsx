import LogoIcon from "../../../assets/Logo.png";

function SignUp() {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex w-[410px] h-[485px] rounded-[10px] bg-[#fff]/40 backdrop-blur-md overflow-hidden">
          
          <div className="w-[50px] bg-[#133970]/90 backdrop-blur-md" />
          
          <div className="flex flex-col flex-1 items-center justify-start pt-1">
            
            <div className="flex items-center justify-center relative bottom-[15px]">
              <img src={LogoIcon} alt="Logo" className="w-[110px]" />
              <div className="flex flex-col items-center relative right-[19px] top-[5px]">
                <h1 className="text-[16px] text-[#133970] font-[600] leading-tight mb-1">
                  We're excited to have you<br />on board!
                </h1>
              </div>
            </div>

            <form className="relative flex flex-col items-start bottom-[30px]">
              
              <label className="flex flex-col w-[230px]">
                <h2 className="text-[12.5px] text-[#133970] mb-1 ml-1">Firstname:</h2>
                <input
                  type="text"
                  className="h-[27px] px-4 py-1 mb-1 border border-[#3b7ce9] rounded-[8px] bg-[#fbf5f5]/30 backdrop-blur-md shadow"
                />
              </label>

              <label className="flex flex-col w-[230px]">
                <h2 className="text-[13px] text-[#133970] mb-1 ml-1">Lastname:</h2>
                <input
                  type="password"
                  className="h-[27px] px-4 py-1 mb-1 border border-[#3b7ce9] rounded-[8px] bg-[#fbf5f5]/30 backdrop-blur-md shadow"
                />
              </label>

              <label className="flex flex-col w-[230px]">
                <h2 className="text-[13px] text-[#133970] mb-1 ml-1">Mobile No:</h2>
                <input
                  type="password"
                  className="h-[27px] px-4 py-1 mb-1 border border-[#3b7ce9] rounded-[8px] bg-[#fbf5f5]/30 backdrop-blur-md shadow"
                />
              </label>

              <label className="flex flex-col w-[230px]">
                <h2 className="text-[13px] text-[#133970] mb-1 ml-1">Email Address:</h2>
                <input
                  type="password"
                  className="h-[27px] px-4 py-1 mb-1 border border-[#3b7ce9] rounded-[8px] bg-[#fbf5f5]/30 backdrop-blur-md shadow"
                />
              </label>

              <label className="flex flex-col w-[230px]">
                <h2 className="text-[13px] text-[#133970] mb-1 ml-1">Password:</h2>
                <input
                  type="password"
                  className="h-[27px] px-4 py-1 mb-1 border border-[#3b7ce9] rounded-[8px] bg-[#fbf5f5]/30 backdrop-blur-md shadow"
                />
              </label>

              <label className="flex flex-col w-[230px]">
                <h2 className="text-[13px] text-[#133970] mb-1 ml-1">Confirm Password:</h2>
                <input
                  type="password"
                  className="h-[27px] px-4 py-1 mb-1 border border-[#3b7ce9] rounded-[8px] bg-[#fbf5f5]/30 backdrop-blur-md shadow"
                />
              </label>

              <div className="flex justify-center w-full my-1">
                <a href="#" className="inline text-[9px] text-[#133970] no-underline">
                  I agree to the Terms of Service and Privacy Policy
                </a>
              </div>

              <button
                type="submit"
                className="w-[230px] h-[27px] mt-2 text-[16px] text-white bg-[#133970] rounded-[8px] hover:bg-[#102c5d] transition"
              >
                confirm
              </button>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
