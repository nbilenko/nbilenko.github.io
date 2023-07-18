import { dearData } from "@constants/data";
import InlineLink from "./InlineLink";

export default function DearData() {
  return (
    <section className="max-w-7xl">
      <div className="md:flex min-h-100vh">
        <aside className="sidebar top-20 hidden md:block md:sticky box-border rounded border-2 dark:border-[#33636E]">
          <h1>
            <a href="#about">about the project</a>
          </h1>
          <hr className="my-5" />
          <ul>
            {dearData.weeks.map((week, idx) => (
              <li key={`week-${idx}-sidebar`} className="my-3 mx-1">
                <a href={`#${week.url}`}>{week.theme}</a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="max-w-6xl mx-4 md:mx-20 md:my-10 contentwithsidebar">
          <div>
            <span className="anchor -top-20 md:-top-40" id="about" />
            <h1 className="text-4xl p-4 font-bold text-slate-500 dark:text-slate-300">
              Dear Data: hand-drawn data postcard exchange
            </h1>
            <div className="m-4">
              In 2014-2015, data artists Giorgia Lupi and Stefanie Posavec
              created a{" "}
              <InlineLink
                href="http://www.dear-data.com/theproject"
                text="beautiful project called Dear Data"
                blank={true}
              />
              , exchanging 52 pairs of hand-drawn postcards capturing their
              personal data. This project launched a movement, and many artists,
              designers, students, data people, and my friend Ching Hsieh and I
              followed in Stefanie and Giorgia's footsteps. I love how the
              postcards we've exchanged serve as a portal through time and space
              and a reminder to stop and take notice.
            </div>
          </div>
          {dearData.weeks.map((week, idx) => (
            <div key={`week-${idx}`} className="">
              <span className="anchor -top-10 md:-top-20" id={week.url} />
              <DearDataWeek data={week} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DearDataWeek({ data }) {
  return (
    <div className="shadow-lg">
      <h2 className="text-2xl p-4 font-bold">{data.theme}</h2>
      <div className="" id={data.theme}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center p-2">
          <div className="p-3">
            <span className="text-[#B04528] font-semibold">ching: </span>
            <span>{data.ching.text}</span>
          </div>
          <DearDataImage
            src={data.ching.frontImage}
            alt={`${data.theme} ching (front)`}
          />
          <DearDataImage
            src={data.ching.backImage}
            alt={`${data.theme} ching (back)`}
          />
          <div className="p-3">
            <span className="text-[#4C89B3] font-semibold">natalia: </span>
            <span>{data.natalia.text}</span>
          </div>
          <DearDataImage
            src={data.natalia.frontImage}
            alt={`${data.theme} natalia (front)`}
          />
          <DearDataImage
            src={data.natalia.backImage}
            alt={`${data.theme} natalia (back)`}
          />
        </div>
        <div className="text-gray-50 font-light text-xs rounded-sm px-4 py-2">
          {data.description}
        </div>
      </div>
    </div>
  );
}

function DearDataImage({ src, alt }) {
  return (
    <div className="box-border border-4 dark:border-[#33636E]">
      <img src={src} alt={alt} className="ml-auto mr-auto object-cover" />
    </div>
  );
}
