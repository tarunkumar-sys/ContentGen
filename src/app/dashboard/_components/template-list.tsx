"use client";

import { useEffect, useState } from "react";
import { contentTemplates } from "@/lib/content-templates";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    if (searchCategory === "All") {
      setTemplateList(contentTemplates);
    } else if (searchCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchCategory]);

  // Search Input
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 px-5">
      {templateList.map((template) => (
        <div key={template.slug}>
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-white w-full shadow-md rounded-lg h-[200px] border py-4 px-4 flex flex-col justify-center hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            {template.icon && (
              <template.icon className="h-12 w-12 text-blue-600 mb-2" />
            )}
            <h2 className="font-semibold mt-5">{template.name}</h2>
            <p className="text-gray-500 line-clamp-3">{template.desc}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
