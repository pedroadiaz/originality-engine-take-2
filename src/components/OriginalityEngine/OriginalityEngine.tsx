/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const OriginalityEngine: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col min-h-[1155px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72f4fd9dbf1b21b016add9930b1dc5e459b9eec06d43f197cc28232b248de253?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default OriginalityEngine;
