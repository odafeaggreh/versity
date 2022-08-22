/** @format */

import Card from "./card";
import { categories } from "../../constants/categories";

export default function MobileGridList() {
  return (
    <div className="z-0 flex flex-col gap-y-6 mb-24 mt-4 mx-auto">
      <div className="ml-6 text-gray-500">Browse Categories</div>
      <div className="flex flex-wrap gap-6 justify-center">
        {categories.map((category) => (
          <Card key={category.name} svg={category.svg} name={category.name} />
        ))}
      </div>
    </div>
  );
}
