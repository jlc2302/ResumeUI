function Qualification() {
  const radius = 41;
  const center = 60;
  const weight = 25;
  const fullCircle = 2 * Math.PI * radius;

  return (
    <section>
      {/* Left Card (Qualification Progress) */}
      <div className="fixed md:left-[34%] xl:left-[32.6%] md:top-[100px] xl:top-[120px] md:w-[15vw] xl:w-[15.2vw] md:h-[29vh] xl:h-[32.4vh] flex flex-col items-center justify-center bg-white border-2 border-[#c2bebe] rounded-tl-[10px] rounded-bl-[10px] pb-5">
        <h1 className="text-[#133970] text-[15px] md:text-[13px] leading-[60px]">
          Qualification
        </h1>
        <div className="flex flex-col items-center">
         <div className="relative flex justify-center items-center">
  <svg
    viewBox="-35 5 180 110"
    className="sm:w-full md:w-full xl:w-full h-auto rotate-[-90deg] origin-center"
  >
    <circle
      stroke="#ddd"
      strokeWidth={weight}
      fill="transparent"
      r={radius}
      cx={center}
      cy={center}
    />
    <circle
      stroke="#3b7ce9"
      strokeWidth={weight}
      fill="transparent"
      r={radius}
      cx={center}
      cy={center}
      strokeDasharray={fullCircle}
      strokeDashoffset={82.94}
      className="transition-[stroke-dashoffset] duration-200 ease-linear"
    />
  </svg>

  {/* This centers the text perfectly */}
  <div className="absolute inset-0 flex items-center justify-center md:text-[13px] md:bottom-[10px] xl:text-[16px]">
    70%
  </div>
</div>
        </div>
      </div>

      {/* Right Card (Analytics Feedback) */}
      <div className="fixed md:left-[48.8%] xl:left-[47.6%] md:top-[100px] xl:top-[120px] md:w-[37vw] xl:w-[37.5vw] md:h-[29vh] xl:h-[32.4vh] flex flex-col justify-center bg-white border-2 border-[#c2bebe] rounded-tr-[10px] rounded-br-[10px] md:px-[28px] xl:px-[38px] md:py-[20px] xl:py-[32px]">
        <h1 className="text-[#133970] md:text-[13px] xl:text-[15px] md:mb-2 xl:mb-5">
          Analytics
        </h1>
        <div className="md:w-full xl:w-full md:h-full xl:h-[200px] bg-[#cecece] rounded-[10px] p-5">
          <p>Your qualification feedback will appear here.</p>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
