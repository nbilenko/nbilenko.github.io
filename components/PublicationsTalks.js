import Link from "next/link";
import { useRouter } from "next/router";
import userData from "@constants/data";

const PUB_COLOR = {
    article: "blue",
    thesis: "red",
    proceedings: "cyan",
    patent: "green",
    report: "yellow"
}

function TabLink({ name, href, active }) {
    return (
        <Link name={name} href={href}
            className={`inline-block p-4 rounded-t-lg ${active
                ? "font-semibold text-sky-700 border-b-2 border-sky-800 dark:text-yellow-50 dark:border-yellow-50 active"
                : "dark:text-gray-300 border-transparent hover:text-gray-700 hover:font-semibold hover:border-gray-300 dark:hover:text-gray-100"
                }`}>{`${name} `}</Link>
    )
}

function SectionTitle({ id, name }) {
    return (
        <Link href={{ hash: id }}>
            <h3 className="mx-4 md:mx-16 mt-4 text-xl md:text-3xl font-bold md:text-left text-slate-500 dark:text-slate-300">
                <span className="anchor -top-20 md:-top-40" id={id}></span>
                {name}
            </h3>
        </Link>
    )
}

export default function PublicationsTalks() {
    const router = useRouter();
    const path = router.asPath;
    return (
        <section>
            <div className="sticky top-0 md:top-20 left-4 max-w-6xl text-sm text-center border-b border-gray-200 dark:border-gray-700 bg-[#fbffff] dark:bg-[#3A6A75]">
                <ul className="flex flex-wrap -mb-px">
                    <li className="ml-2 md:ml-16 mr-2">
                        <TabLink name="Publications" href="#publications" active={path.endsWith("#publications")} />
                    </li>
                    <li className="mr-2">
                        <TabLink name="Talks" href="#talks" active={path.endsWith("#talks")} />
                    </li>
                </ul>
            </div>
            <SectionTitle name="Publications" id="publications" href="#publications" />
            <div className="px-2 md:px-20 mx-4">
                <ul role="list" className="divide-y divide-gray-100">
                    {userData.publications.map((pub, idx) => (
                        <PublicationCard
                            key={idx}
                            {...pub}
                        />
                    ))}
                </ul>
            </div>
            <SectionTitle name="Talks" id="talks" href="#talks" />
            <div className="px-2 md:px-20 mx-4">
                <ul role="list" className="divide-y divide-gray-100">
                    {userData.talks.map((pub, idx) => (
                        <TalkCard
                            key={idx}
                            {...pub}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

const PublicationCard = ({ title, authors, year, where, url, urlText, topics, type }) => {
    const pubColor = PUB_COLOR[type]
    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="gap-x-4">
                {pubColor && <span className={`inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-small bg-${pubColor}-100 text-${pubColor}-800`}>{type}</span>}
                {url && <a href={url} target="_blank" rel="noreferrer noopener">
                    <span className="inline-flex items-center mx-1 rounded-md bg-gray-30 dark:bg-gray-600 px-2 py-1 text-xs font-small text-gray-600 dark:text-gray-100 ring-1 ring-inset ring-gray-600/20 dark:ring-gray-100/20  hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-sky-700 dark:hover:text-sky-400">
                        {urlText ? urlText : "read"}
                        <span className="mx-0.5"></span>
                        <svg fill="currentColor" height="16" width="16" version="1.1" xmlns="http://www.w3.org/1999/xlink"
                            viewBox="0 0 194.818 194.818" space="preserve">
                            <g>
                                <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
		c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
		C194.818,6.19,190.789,2.161,185.818,2.161z"/>
                                <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
		c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"/>
                            </g>
                        </svg>
                    </span></a>}
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 rounded-lg text-gray-700 dark:text-gray-200">
                        {`[${year}] ${title}`}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-200">{authors}</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-200">{where}</p>
                    {topics && <p className="mt-1 text-xs leading-5 text-gray-500">
                        {topics.sort().map((topic, idx) => <Badge key={idx} text={topic} />)}
                    </p>}
                </div>
            </div>
        </li>
    );
};


const Badge = ({ text }) => {
    return (
        <span className="inline-flex items-center mr-0.5 rounded-md px-2 py-1 text-xs font-small text-gray-600 dark:text-gray-100 ring-1 ring-inset ring-gray-600/20 dark:ring-gray-100/20">
            {text}
        </span>
    )
}

const TalkCard = ({ title, where, whereurl, year, url, urlText }) => {
    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="gap-x-4">
                {url && <a href={url} target="_blank" rel="noreferrer noopener">
                    <span className="inline-flex items-center mr-1 rounded-md bg-gray-30 dark:bg-gray-600 px-2 py-1 text-xs font-small text-gray-600 dark:text-gray-100 ring-1 ring-inset ring-gray-600/20 dark:ring-gray-100/20  hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-sky-700 dark:hover:text-sky-400">
                       {urlText ? urlText : "slides"}
                        <span className="mx-0.5"></span>
                        <svg fill="currentColor" height="16" width="16" version="1.1" xmlns="http://www.w3.org/1999/xlink"
                            viewBox="0 0 194.818 194.818" space="preserve">
                            <g>
                                <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
		c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
		C194.818,6.19,190.789,2.161,185.818,2.161z"/>
                                <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
		c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"/>
                            </g>
                        </svg>
                    </span></a>}
                <div className="min-w-0 flex-auto">
                    <div className="flex">
                        <p className="text-sm font-semibold leading-6 rounded-lg text-gray-700 dark:text-gray-200">
                            {`[${year}] ${title}`}
                        </p>
                    </div>
                    {whereurl ? <a href={whereurl} target="_blank" rel="noreferrer noopener">
                        <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-sky-700 dark:hover:text-sky-400">{where}</p>
                    </a> : <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-200">{where}</p>}
                </div>
            </div>
        </li >
    );
};
