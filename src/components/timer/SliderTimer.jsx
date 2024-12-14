import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
const SliderTimer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear().toString().substr(-2);
  const [countDownTime, setCountDownTIme] = useState({
    days: "03",
    hours: "23",
    minutes: "01",
    seconds: "15",
  });
  const getTimeDiffrence = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? `${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
        10
        ? `${Math.floor(
          (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        )}`
        : `0${Math.floor(
          (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "03",
        hours: "23",
        minutes: "01",
        seconds: "15",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    {
      const customDate = new Date();
      const countDownDate = new Date(
        customDate.getFullYear(),
        customDate.getMonth() + 1,
        customDate.getDate() + 6,
        customDate.getHours(),
        customDate.getMinutes(),
        customDate.getSeconds() + 1
      );
      setInterval(() => {
        getTimeDiffrence(countDownDate.getTime());
      }, 1000);
    }
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex flex-col-reverse justify-center items-center p-2 font-bold bg-[#fff] rounded-full  text-black">
        <p>{t("timer.days")}</p>
        <div>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.days?.charAt(0)}
          </span>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.days?.charAt(1)}
          </span>
          <span
            className={
              countDownTime?.days?.length <= 2
                ? "hidden"
                : "text-[20px] sm:text-[25px] p-2"
            }
          >
            {countDownTime?.days?.charAt(2)}
          </span>
        </div>
      </div>


      <div className="flex flex-col-reverse justify-center items-center p-2 font-bold bg-[#fff] rounded-full  text-black">
        <p>{t("timer.hours")}</p>
        <div>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.hours?.charAt(0)}
          </span>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.hours?.charAt(1)}
          </span>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-center items-center p-2 font-bold bg-[#fff] rounded-full  text-black">
        <p>{t("timer.minutes")}</p>
        <div>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.minutes?.charAt(0)}
          </span>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.minutes?.charAt(1)}
          </span>
        </div>
      </div>


      <div className="flex flex-col-reverse justify-center items-center p-2 font-bold bg-[#fff] rounded-full  text-black">
        <p>{t("timer.seconds")}</p>
        <div>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.seconds?.charAt(0)}
          </span>
          <span className="text-[20px] sm:text-[25px] p-2">
            {countDownTime?.seconds?.charAt(1)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SliderTimer;
