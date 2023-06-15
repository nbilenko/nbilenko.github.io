import Link from "next/link";
import userData from "@constants/data";

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
        <p className="text-m my-2">
          I am a software engineer with 10+ years of programming experience and
          7 years of software industry experience. I have worked as a data
          visualization engineer, UI engineer, platform engineer, machine
          learning engineer, data scientist, and computational neuroscientist.
          I'm drawn to creative collaborations and learning by making things.
        </p>
        <p className="text-m my-2">
          This site is home to some of my
          <span className="rounded-sm text-sky-700 dark:text-yellow-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-sky-600 dark:hover:text-sky-400">
            <Link href="/pubstalks"> publications and talks</Link>
          </span>
          ,{" "}
          <span className="rounded-sm text-sky-700 dark:text-yellow-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-sky-600 dark:hover:text-sky-400">
            <Link href="/projects"> technology-related projects</Link>
          </span>
          , and{" "}
          <span className="rounded-sm text-sky-700 dark:text-yellow-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-sky-600 dark:hover:text-sky-400">
            <Link href="/crafts"> craft projects</Link>
          </span>
          .
        </p>
        <p className="text-m my-2">
          Last year, I was profiled by USPTO in{" "}
          <span className="rounded-sm text-sky-700 dark:text-yellow-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-sky-600 dark:hover:text-sky-400">
            <Link
              href="https://www.uspto.gov/learning-and-resources/journeys-innovation/field-stories/artificial-intelligence-all
"
              target="_blank"
              rel="noopener noreferrer"
            >
              this article
            </Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
}
