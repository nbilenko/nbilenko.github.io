import Link from "next/link";

export default function InlineLink({ href, text, blank = false }) {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
    >
      <span className="rounded-sm text-sky-700 dark:text-yellow-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-sky-600 dark:hover:text-sky-400">
        {text}
      </span>
    </Link>
  );
}
