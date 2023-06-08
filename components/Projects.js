import userData from "@constants/data";

export default function Projects() {
    return (
        <section>
            <div className="max-w-6xl mx-4 md:mx-20 md:my-10">
                <img src="/under-construction.gif" alt="under construction" width="400" />
                {/* <h1 className="text-4xl p-4 font-bold text-slate-500 dark:text-slate-300">
                    Projects
                </h1>
                <div className="grid md:grid-cols-6 gap-8 pb-40">
                    {userData.projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div> */}
            </div >
        </section>
    );
}

function ProjectCard({ name, url, imageUrl }) {
    return (
        <a
            href={url}
            className="w-full block col-span-3 sm:col-span-2 shadow-2xl"
        >
            <div className="relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="transform hover:scale-125 transition duration-1000 ease-out"
                />
                <h1 className="absolute top-5 left-3 text-gray-50 font-bold text-xl bg-slate-400 rounded-md px-2">
                    {name}
                </h1>
            </div>
        </a>
    )
}