import { useCallback, useState } from "react";
import userData from "@constants/data";
import { Carousel, CarouselImage } from "./Carousel";

export default function Projects({ dataType = "projects" }) {
  const allTags = [
    ...new Set(
      userData[dataType].reduce((acc, p) => [...acc, ...(p.tags || [])], [])
    ),
  ].sort();
  const [selectedTags, setSelectedTags] = useState(allTags);
  const selectedProjects = userData[dataType].filter(
    (project) =>
      (project["tags"] || []).filter((tag) => selectedTags.includes(tag))
        .length > 0
  );

  const onTagClick = useCallback(
    (tag) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags([tag]);
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    },
    [selectedTags, setSelectedTags]
  );

  const onTagDeleteClick = useCallback(
    (tag) => {
      const newTags = selectedTags.filter((t) => t !== tag);
      setSelectedTags(newTags);
    },
    [selectedTags, setSelectedTags]
  );

  return (
    <section>
      <div className="max-w-6xl mx-4 md:mx-20 md:my-10">
        <h1 className="text-4xl p-4 font-bold text-slate-500 dark:text-slate-300">
          Projects
        </h1>
        <div className="m-4">
          <span className="text-sm mr-2">Select tags:</span>
          <SelectorBadge
            key={"all"}
            text={"ALL"}
            onClick={() => setSelectedTags(allTags)}
            onDelete={() => setSelectedTags([])}
            selected={
              selectedTags.size === allTags.size &&
              allTags.every((x) => selectedTags.includes(x))
            }
          />
          {allTags.map((tag, idx) => (
            <SelectorBadge
              key={idx}
              text={tag}
              onClick={onTagClick}
              onDelete={onTagDeleteClick}
              selected={selectedTags.includes(tag)}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 pb-10">
          {selectedProjects.map((project, idx) => (
            <ProjectCard key={idx} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ data }) {
  return (
    <div className="w-full block col-span-3 md:col-span-1 shadow-2xl bg-slate-500 dark:bg-slate-600">
      <div className="relative m-2" id={data.name}>
        {data.tiles ? (
          <Carousel tiles={data.tiles} />
        ) : (
          <CarouselImage src={data.imageUrl} alt={data.name} />
        )}
        <div className="ml-3 mt-1">
          {data.tags.map((tag, idx) => (
            <ProjectBadge key={`${data.name}-${idx}`} text={tag} />
          ))}
        </div>
        {data.url ? (
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <h2 className="inline-flex items-center text-gray-50 font-bold text-xl bg-slate-500 dark:bg-slate-600 rounded-md px-2 py-1 mx-2 hover:bg-slate-400">
              {data.name}
              <span className="mx-2">
                <svg
                  fill="currentColor"
                  height="16"
                  width="16"
                  version="1.1"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 194.818 194.818"
                  space="preserve"
                >
                  <g>
                    <path
                      d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
		c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
		C194.818,6.19,190.789,2.161,185.818,2.161z"
                    />
                    <path
                      d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
		c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                    />
                  </g>
                </svg>
              </span>
            </h2>
          </a>
        ) : (
          <h2 className="text-gray-50 font-bold text-xl bg-slate-500 dark:bg-slate-600 rounded-md px-2 py-1 mx-2">
            {data.name}
          </h2>
        )}
        <div className="text-gray-50 font-light text-xs rounded-sm px-4 py-2">
          {data.pattern && (
            <p>
              Pattern:{" "}
              {data.patternUrl ? (
                <a className="card" href={data.patternUrl}>
                  {data.pattern}
                </a>
              ) : (
                <span>{data.pattern}</span>
              )}
            </p>
          )}
          {data.fabric && data.fabric.length > 0 && (
            <div>
              Fabric:{" "}
              {data.fabric.map((fabric, idx) => (
                <span key={idx}>
                  {idx > 0 && ", "}
                  {parseFabric(fabric, data.fabricUrl?.[idx])}
                </span>
              ))}
            </div>
          )}
          {data.description}
        </div>
      </div>
    </div>
  );
}

const parseFabric = (fabric, fabricUrl) => {
  return fabricUrl ? (
    <a className="card" href={fabricUrl}>
      {fabric}
    </a>
  ) : (
    <span>{fabric}</span>
  );
};

const ProjectBadge = ({ text }) => {
  return (
    <span className="inline-flex items-center mr-1 rounded-md px-2 py-1 text-xs font-small text-gray-50 bg-slate-500 dark:bg-slate-600 ring-1 ring-inset ring-gray-100/50">
      {text}
    </span>
  );
};

const SelectorBadge = ({ text, onClick, onDelete, selected }) => {
  return (
    <div
      className={`
    inline-flex items-center mr-2 my-1 rounded-md px-2 py-1 text-xs font-small ring-1 ring-inset hover:shadow-md
    ${
      selected
        ? "text-gray-900 bg-indigo-200"
        : "text-gray-600 dark:text-gray-100"
    }
    ring-gray-600/20 dark:ring-gray-100/20`}
    >
      <span
        onClick={() => onClick(text)}
        aria-label={`select${selected ? " only" : ""} ${text}`}
        title={`select${selected ? " only" : ""} ${text}`}
      >
        {text}
      </span>
      {selected && (
        <button
          className="ml-1"
          onClick={() => onDelete(text)}
          aria-label={`deselect ${text}`}
          title={`deselect ${text}`}
        >
          <span className="font-bold text-gray-600">x</span>
        </button>
      )}
    </div>
  );
};
