/**
 * This code was generated by Builder.io.
 */
import React from "react";

const RecentCampaigns: React.FC = () => {
  const campaigns = [
    "Perfume ad for strong male",
    "Polar bears for summer ad camp...",
    "Penguins dancing around",
  ];

  return (
    <>
      <h2 className="self-start mt-64 ml-9 text-base font-bold text-center text-white max-md:mt-10 max-md:ml-2.5">
        Recent campaigns
      </h2>
      <ul className="flex flex-col self-end mt-2.5 mr-0 text-xs text-white">
        {campaigns.map((campaign, index) => (
          <li
            key={index}
            className={index > 0 ? "mt-1.5 w-full max-md:pr-5" : ""}
          >
            {campaign}
          </li>
        ))}
      </ul>
      <button className="flex justify-center items-center px-2 mt-1.5 max-w-full text-xs font-bold leading-none text-center text-white rounded-xl min-h-[36px] w-[216px]">
        Show all
      </button>
    </>
  );
};

export default RecentCampaigns;
