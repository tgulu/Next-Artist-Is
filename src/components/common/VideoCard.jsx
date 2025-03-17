import React from "react";

export const VideoCard = ({ cover }) => {
  return (
    <div className="py-1.5 mx-2 flex">
      <div className="relative  flex justify-center items-center ">
        <video
          src={cover}
          className=" max-h-[600px] 
          object-cover rounded-3xl"
          muted
          loop
          autoPlay
        />
      </div>
    </div>
  );
};

{
  /* {video}  */
}
