import { useAnimatedProgress } from "./useAnimatedProgress";

function ProgressCircularBar({ title, percentage, feedback, position }) {
  const { progress, getProgressColor } = useAnimatedProgress(percentage, 10);

  const radius = 40;
  const center = 60;
  const weight = 25;
  const fullCircle = 2 * Math.PI * radius;

  const display = {
    top: "sm:top-[15%] md:top-[20%] xl:top-[125px]",
    bottom: "sm:bottom-[10%] md:bottom-[10%] xl:bottom-[80px]",
  };

  const displaySet = display[position];

  return (
    <section>
      <div
        className={`fixed ${displaySet} sm:left-[20%] md:left-[27%] lg:left-[34%] xl:left-[32.6%]
        sm:w-[25vw] md:w-[20vw] lg:w-[15vw] xl:w-[15.2vw] 
        sm:h-[29vh] md:h-[29vh] lg:h-[29vh] xl:h-[30vh]
        flex flex-col items-center justify-center bg-white border-2 border-[#c2bebe]
        rounded-tl-[10px] rounded-bl-[10px] pb-5`}
      >
        <h1 className="text-[#133970] sm:text-[13px] xl:text-[16px] sm:leading-[60px] xl:leading-[70px] font-medium">
          {title}
        </h1>

        <div className="flex flex-col items-center">
          <div className="relative flex justify-center items-center">
            <svg
              viewBox="-35 5 180 110"
              className="w-[200px] sm:w-[140px] md:w-[170px] xl:w-full h-auto rotate-[-90deg] origin-center"
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
                stroke={getProgressColor()}
                strokeWidth={weight}
                fill="transparent"
                r={radius}
                cx={center}
                cy={center}
                strokeDasharray={fullCircle}
                strokeDashoffset={fullCircle * ((100 - progress) / 100)}
                className="transition-[stroke-dashoffset] duration-200 ease-linear"
              />
            </svg>
            <div className="text-[#133970] absolute inset-0 flex items-center justify-center md:text-[13px] xl:text-[16px] bottom-[10px]">
              {progress}%
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed ${displaySet} sm:left-[44.7%] md:left-[46.8%] lg:left-[48.8%] xl:left-[47.6%]
        sm:w-[45vw] md:w-[45vw] lg:w-[37vw] xl:w-[37.5vw] 
        sm:h-[29vh] md:h-[29vh] xl:h-[30vh]
        flex flex-col justify-center bg-white border-2 border-[#c2bebe]
        rounded-tr-[10px] rounded-br-[10px] 
        sm:px-[20px] md:px-[28px] xl:px-full 
        sm:py-5 md:py-[20px] xl:py-full`}
      >
        <h1 className="text-[#133970] sm:text-[12px] md:text-[13px] xl:text-[16px] sm:mb-3 md:mb-2 xl:mb-3 font-medium">
          Analytics
        </h1>

        <div
          className="w-full h-[200px] xl:h-[200px] 
             bg-[#cecece] rounded-[10px] 
             p-4 text-[14px] flex"
        >
          <p>{feedback}</p>
        </div>
      </div>
    </section>
  );
}

export default ProgressCircularBar;
