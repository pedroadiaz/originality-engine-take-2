/**
 * This code was generated by Builder.io.
 */
import React, { useContext } from "react";
import { OriginalityEngineContext } from "../../components/OriginalityEngine2/OriginalityEngine";

const TrendingHashtags: React.FC = () => {
  const adResponse = useContext(OriginalityEngineContext);

  const hashtags = adResponse?.hashtags || [];

  return (
    <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-0 w-full max-md:-mt-8 max-md:max-w-full">
        <div className="max-w-full w-[467px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <h3 className="mt-16 text-lg font-bold leading-snug text-white max-md:mt-10">
                Trending Hashtags
              </h3>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b600a15fae5554ad2a97259e847147ce73064ed9c865221203a206607a4acf86?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
                alt="Trending Hashtags Graph"
                className="object-contain grow w-full aspect-[2.18] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-2 text-sm font-medium leading-none text-center text-white whitespace-nowrap max-md:pr-5">
          <div className="flex flex-wrap flex-auto gap-4 items-end mr-0 w-full max-md:max-w-full">
            {hashtags.map((hashtag, index) => (
              <div
                key={index}
                className="flex gap-1 justify-center items-center py-1.5 pr-1.5 pl-2.5 rounded-lg bg-white bg-opacity-30"
              >
                <div className="gap-2 self-stretch my-auto">{hashtag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHashtags;
