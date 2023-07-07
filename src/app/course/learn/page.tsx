import { lessonLists } from "data";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-full">
      <div className=" flex gap-4 h-full  ">
        <div className="mt-32  w-[380px] flex gap-8 flex-col text-[#222] border-r-accent border-r-[1px] mx-4 p-2">
          {lessonLists.map((lesson, i) => {
            return (
              <h1
                key={i}
                className="text-xl hover:bg-secondary-button hover:p-2 ease-in-out duration-300 rounded-xl"
              >
                {lesson}
              </h1>
            );
          })}
        </div>
        <div className="flex mt-16 flex-col text-[#222]">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-semibold">1. Introduction</h1>
            <p>4 min</p>
          </div>
          {/* <div className="w-[800px] h-[560px] rounded-lg bg-accent"></div> */}
          <iframe
            src="https://player.vimeo.com/video/738671414?h=3b018417ad&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-[900px] h-[600px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <iframe
src="https://player.vimeo.com/video/738671414?h=3b018417ad&badge=0&autopause=0&player_id=0&app_id=58479/embed"
allow="autoplay; fullscreen; picture-in-picture"
allowFullScreen
style={{
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%;",
}}
></iframe> */
}
