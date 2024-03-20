import { Box } from "@chakra-ui/react";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";
interface skills {
  onChange: (value: string) => void;
}
const Skills = ({ onChange }: skills) => {
  return (
    <Box w={{ sm: "100%",base:"100%", md: "30%" }}>
      <Box className="relative">
        <input
          id="text"
          type="text"
          placeholder="Add Skill"
          // autoFocus={autoFocus}
          className={`w-full h-12  py-3 px-3 border border-gray-300 rounded-r-lg rounded-l-lg text-black bg-white focus:outline-none`}
          // value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
          style={{ color: "black", width: "100%" }}
        />
        <div className="absolute right-2 bottom-3 lg:bottom-3  flex items-center justify-center gap-x-2">
          {/* <div className={twMerge("font-medium rounded-lg text-sm", !endIcon ? "hidden" : "block")}>{endIcon}</div> */}
          <button className=" flex justify-center items-center" type="button">
            <RxCrossCircled color={"#FF8484"} className="h-6 w-6" />
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default Skills;
