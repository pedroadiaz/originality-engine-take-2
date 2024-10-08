/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const AssessButton: React.FC<ButtonProps> = (
  { onClick }
) => {
  return (
    <button onClick={onClick} className="flex gap-2 justify-center items-center px-3 py-3.5 max-w-full text-base font-medium leading-none text-center text-white rounded-lg bg-[linear-gradient(264deg,#0F2283_3.87%,#0075FF_103.97%)] mt-2 w-[233px] max-md:mt-10">
      <span className="self-stretch my-auto">Assess now</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb3064a14adb4c979e62124c46a2c178bf3ae16c8c11ee5f703a5a10391f2d76?placeholderIfAbsent=true&apiKey=3502b91ecd184de6be2f646c5a302933"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    </button>
  );
};

export default AssessButton;
