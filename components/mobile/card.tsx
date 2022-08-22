/** @format */

import Link from "next/link";

interface Props {
  svg: any;
  name: string;
}

export default function Card({ svg, name }: Props) {
  const nameToLower = name.toLowerCase();
  return (
    <Link href="/categories/[id]" as={`/categories/${nameToLower}`}>
      <div className="flex flex-col pb-7 pt-2 px-7 w-40 text-center border border-gray-200 rounded-md shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
        <div className="mb-5 mt-2">{svg}</div>

        <div className="text-sm leading-none">{name}</div>
      </div>
    </Link>
  );
}
