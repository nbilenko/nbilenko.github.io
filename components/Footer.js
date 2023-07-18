import { userData } from "@constants/data";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="bg-[#eaf4ff] dark:bg-[#311F3E]">
      <div className="max-w-6xl flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center px-4 md:px-20 py-8 ">
        <div>
          <p>
            &copy; {userData.name} {userData.lastUpdated}
          </p>
          <p className="text-[10px]">
            I made this site to learn more about next.js and tailwind. Inspired
            by design by{" "}
            <a
              href="https://manuarora.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Manu Aurora
            </a>
            . Favicon by{" "}
            <a
              href="https://www.flaticon.com/free-icon/squirrel_3504818"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              iconixar
            </a>
            .
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
}
