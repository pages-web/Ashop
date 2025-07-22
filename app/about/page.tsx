import { getKbArticlesByCode } from "@/sdk/queries/kb";
import React from "react";

export const revalidate = 1;

export default async function AboutUs() {
  const { articles: aboutUsArticles } = await getKbArticlesByCode("about_us");

  return (
    <div className="min-h-screen flex flex-col align-center p-20">
      {/* <div className="px-4 sm:px-[20px] mx-auto my-8 ">
        <div
          className="text-lg text-gray-800 block"
          dangerouslySetInnerHTML={{ __html: aboutUsArticles[0]?.content }}
        ></div>
      </div> */}
      test
    </div>
  );
}
