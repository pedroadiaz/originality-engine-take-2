/**
 * This code was generated by Builder.io.
 */
import React, { use, useContext, useEffect, useState } from "react";
import { OriginalityEngineContext } from "../../components/OriginalityEngine2/OriginalityEngine"

const InspirationalVideos: React.FC = () => {
  const adResponse = useContext(OriginalityEngineContext);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [imageUrl1, setImageUrl1] = useState<string | undefined>(undefined);
  const [imageUrl2, setImageUrl2] = useState<string | undefined>(undefined);

  useEffect(() => {
    setImageUrl(adResponse?.imagePrompts[0].imageUrl);
    if (adResponse?.imagePrompts[1].imageUrl) {
      setImageUrl1(adResponse?.imagePrompts[1].imageUrl);
    }
    if (adResponse?.imagePrompts[2].imageUrl) {
      setImageUrl2(adResponse?.imagePrompts[2].imageUrl);
    }

  }, [adResponse]);

  const handleClick = () => {
    if (adResponse?.imagePrompts[1].prompt && !adResponse.imagePrompts[1].imageUrl) {
      const response = fetch("/api/images", { method: "POST", body: JSON.stringify({ prompt: adResponse?.imagePrompts[1].prompt }) })
      .then((response) => response.json())
      .then((data) => {
        adResponse.imagePrompts[1].imageUrl = data.image as string;
        setImageUrl1(data.image as string);
        localStorage.setItem("adResponse", JSON.stringify(adResponse));
      });
    } else if (adResponse?.imagePrompts[1].imageUrl) { 
      if (adResponse?.imagePrompts[2].prompt && !adResponse.imagePrompts[2].imageUrl) {
        const response = fetch("/api/images", { method: "POST", body: JSON.stringify({ prompt: adResponse?.imagePrompts[2].prompt }) })
        .then((response) => response.json())
        .then((data) => {
          adResponse.imagePrompts[2].imageUrl = data.image as string;
          setImageUrl2(data.image as string);
          localStorage.setItem("adResponse", JSON.stringify(adResponse));
        });
      }
    }
  }

  const setImage = (index: number) => {
    setImageUrl(adResponse?.imagePrompts[index].imageUrl);
  }

  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden relative flex-col px-8 pt-9 pb-3.5 w-full rounded-2xl min-h-[445px] max-md:px-5 max-md:mt-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-5 justify-between items-start w-full max-md:mr-1.5 max-md:max-w-full">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold leading-snug text-black">
              Inspirational videos
            </h3>
            <div className="self-start mt-1.5 text-sm font-medium leading-none text-slate-900">
              Example videos
            </div>
          </div>
          <button onClick={handleClick} className="flex gap-2 px-4 py-4 text-sm font-medium leading-none text-white whitespace-nowrap rounded-xl bg-blue-950 bg-opacity-40 shadow-[0px_3px_5px_rgba(0,0,0,0.02)]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad27ac8a89dcafec8b942a0f04c0a76dedfbdc3c3eee8569aaf2838d3c6f02ed?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
              alt=""
              className="object-contain shrink-0 w-4 aspect-[1.07]"
            />
            <span>Download</span>
          </button>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd3cc8abae8cacc00c989ad93a47a07d4747298a93a90d8fbab0de12ded21c27?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
          alt=""
          className="object-contain mt-16 rounded-none aspect-[1.07] w-[93px] max-md:mt-10"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c6f943fcf64973826d7df92c66d766e04a9d46b3d0970da0db7116751db8dc?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
          alt=""
          className="object-contain mt-2.5 rounded-2xl aspect-[1.06] w-[92px]"
        />
        <div className="flex relative flex-wrap gap-4 mt-2.5">

          <img
            loading="lazy"
            src={adResponse?.imagePrompts[0].imageUrl}
            onClick={() => setImage(0)}
            alt=""
            className="object-contain shrink-0 rounded-2xl aspect-[1.06] w-[92px]"
          />
          {imageUrl1 && (
            <img
              loading="lazy"
              src={imageUrl1}
              onClick={() => setImage(1)}
              alt=""
              className="object-contain shrink-0 rounded-2xl aspect-[1.06] w-[92px]"
            />
          )}
          {imageUrl2 && (
            <img
              loading="lazy"
              src={imageUrl2}
              onClick={() => setImage(2)}
              alt=""
              className="object-contain shrink-0 rounded-2xl aspect-[1.06] w-[92px]"
            />
          )}
          <div className="flex overflow-hidden flex-wrap flex-auto gap-10 self-end px-6 py-3 mt-8 rounded-3xl bg-blue-950 bg-opacity-40 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5">

              <div className="flex flex-auto self-start mt-1">
                <div className="flex shrink-0 my-auto max-w-full rounded-xl bg-[linear-gradient(264deg,#0F2283_3.87%,#0075FF_103.97%)] h-[11px] w-[253px] max-md:-mr-2.5" />
                <div className="flex shrink-0 bg-white rounded-3xl h-[23px] w-[23px]" />
              </div>
            </div>
            <div className="text-xl font-bold leading-none text-white">
              0.14
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationalVideos;
