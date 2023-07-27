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
      <div className="w-0.9 md:w-1/2 mt-3 md:mt-8 md:ml-10">
        <p className="text-l font-bold my-2">
          My name is ny (natalia) bilenko. I like finding art in science, making
          invisible things visible, and digging in the cracks.
        </p>
        <p className="text-sm my-2">
          This site is home to some of my{" "}
          <InlineLink href="/pubstalks" text={"publications and talks"} />,{" "}
          <InlineLink href="/projects" text="technology-related projects" />,
          and <InlineLink href="/crafts" text="craft projects" />.
        </p>
        <p className="text-sm my-2">
          I am a software engineer with 10+ years of programming experience and
          7 years of industry experience. I have worked as a data visualization
          engineer, UI engineer, full-stack engineer, machine learning engineer,
          data scientist, and computational neuroscientist. I'm drawn to
          creative collaborations, learning by making things, and finding new
          connections.
        </p>
        <p className="text-sm my-2">
          I'm searching for a new role, so if you are looking for a
          multidisciplinary engineer who likes figuring out how to help people
          and building useful tools out of messy data,{" "}
          <InlineLink
            href={`mailto:${userData.email}`}
            text="feel free to get in touch"
            blank={true}
          />
          !
        </p>
        <p className="text-sm my-2">
          Most recently, as part of the{" "}
          <InlineLink
            href="https://multithreaded.stitchfix.com/algorithms/"
            text="Algo UI team at Stitch Fix"
            blank={true}
          />
          , I built internal UI and visualization tools. For example, I designed
          and developed{" "}
          <InlineLink
            href="https://multithreaded.stitchfix.com/blog/2023/06/13/ariadne-observability-ui-for-search/"
            text="Ariadne, an observability UI for search"
            blank={true}
          />
          .
        </p>
        <p className="text-sm my-2">
          Last year, I was profiled by USPTO in{" "}
          <InlineLink
            href="https://www.uspto.gov/learning-and-resources/journeys-innovation/field-stories/artificial-intelligence-all
"
            blank={true}
            text="this article"
          />
          .
        </p>
      </div>
    </div>
  );
}
