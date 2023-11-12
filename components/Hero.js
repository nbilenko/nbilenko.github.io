import InlineLink from "./InlineLink";
import { userData } from "@constants/data";

export default function Hero() {
  return (
    <div className="max-w-6xl my-5 mx-4 p-4 md:p-10 flex flex-col md:flex-row justify-left items-start overflow-hidden">
      <div className="w-3/4 md:w-1/2 max-w-md">
        <img src={userData.profileUrl} alt="profile photo" className="shadow" />
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row space-x-4 text-xs">
            <p>
              Location: Sky Pesher by James Turrell. Photo credit: Scott French.
            </p>
          </div>
        </div>
      </div>
      <div className="w-0.9 md:w-1/2 mt-3 md:mt-14 md:ml-10">
        <p className="text-l font-bold my-2">
          My name is ny (natalia) bilenko. I like finding art in science, making
          invisible things visible, and digging in the cracks.
        </p>
        <p className="text-sm my-2">
          I am a senior data visualization engineer at Netflix. Besides
          visualizing data, I like sewing, crocheting, and going on
          low-adrenaline adventures outside.
        </p>
        <p className="text-sm my-2">
          This site is home to some of my{" "}
          <InlineLink href="/pubstalks" text={"publications and talks"} />,{" "}
          <InlineLink href="/projects" text="technology-related projects" />,
          and <InlineLink href="/crafts" text="craft projects" />. Check out
          this <InlineLink href="/jobsearch" text={"mini visualization"} /> I
          made about my 2023 job search.
        </p>
      </div>
    </div>
  );
}
