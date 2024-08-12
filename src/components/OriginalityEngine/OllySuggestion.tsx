/**
 * This code was generated by Builder.io.
 */
import { AdResponse } from "@/app/models/AdResponse";
import React from "react";

interface SuggestionsProps {
  adResponse: AdResponse | null;
  modifyIdea: (update: string) => void;
  handleModify: () => void;
}

const OllySuggestion: React.FC<SuggestionsProps> = ({ adResponse, modifyIdea, handleModify }) => {
  console.log(adResponse);
  const suggestion = adResponse?.suggestedIdeas && adResponse?.suggestedIdeas[0] && adResponse?.suggestedIdeas[0].minorPoints ? adResponse.suggestedIdeas[0].minorPoints[0] : "";
  const mainPoint1 = adResponse?.suggestedIdeas && adResponse?.suggestedIdeas[0] && adResponse?.suggestedIdeas[0].mainPoint ? adResponse.suggestedIdeas[0].mainPoint : "";

  const handleUpdatedPrompt1 = () => {
    modifyIdea(mainPoint1!);
    handleModify();
  }
  
  return (
    <>
      <div className="flex gap-5 justify-between mt-4 max-w-full text-sm font-medium leading-none text-slate-400 w-[229px]">
        <div>Olly&apos;s suggestion</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e5015491bda0b0d50d8ac2b31976fd729eec5cb6e6492353ebc3102fcb9be8?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
          alt=""
          className="object-contain shrink-0 aspect-square w-[18px]"
        />
      </div>
      <div className="flex flex-col pt-2 pr-0.5 pb-3.5 pl-2 mt-2 max-w-full rounded-xl bg-slate-500 bg-opacity-30 w-[233px]">
        <p className="z-10 mr-4 text-sm leading-5 text-zinc-300 max-md:mr-2.5 max-md:ml-1">
          { suggestion }
        </p>
        <div className="flex mt-4 w-full text-sm font-medium leading-none text-center text-white max-md:ml-1">
          <button onClick={handleUpdatedPrompt1} className="flex gap-0.5 justify-center items-center py-1 pr-1 pl-2 rounded-md bg-white bg-opacity-30">
            + { mainPoint1 }
          </button>

        </div>
        <button className="flex justify-center items-center px-2 mt-1.5 text-xs font-bold leading-none text-center text-white rounded-xl min-h-[36px] max-md:mr-2">
          Use this prompt
        </button>
      </div>
    </>
  );
};

export default OllySuggestion;
