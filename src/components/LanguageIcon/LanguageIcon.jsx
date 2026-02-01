import React from 'react';
import ukrain from "../../img/ukraine.svg";
import united from "../../img/united.svg";

const LanguageIcon = ({ lang = "en", color = "white" }) => {
  const isLang = lang === "uk";
  const isDark = color === "black";
  const isGray = color === "gray";

  const textColor = isDark ? "text-black" : isGray ? "text-gray-500" : "text-white";

  return (
    <div>
      {isLang ? (
        <div className={`flex items-center gap-2 ${textColor} font-medium text-sm leading-4 text-left`}>
          <img src={ukrain} alt="Ukrainian flag" className="w-7 h-7" />
          Ukrainian
        </div>
      ) : (
        <div className={`flex items-center gap-2 ${textColor} font-medium text-sm leading-4 text-left`}>
          <img src={united} alt="English flag" className="w-7 h-7" />
          English
        </div>
      )}
    </div>
  );
};

export default LanguageIcon;