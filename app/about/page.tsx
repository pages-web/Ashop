import CarouselClient from "@/components/grid-banner/carousel";
import { getKbArticlesByCode } from "@/sdk/queries/kb";
import Image from "next/image";
import React from "react";

export const revalidate = 1;

export default async function AboutUs() {
//   const { articles: longBanners } = await getKbArticlesByCode("long-banner");
  const { articles: aboutUsArticles } = await getKbArticlesByCode("about_us");
//   const { articles: aboutUsArticles1 } = await getKbArticlesByCode("about_us1");

//   const renderLongBanners = longBanners.length ? (
//     <CarouselClient size="long" items={longBanners} />
//   ) : null;

  return (
    <div className="min-h-screen flex flex-col align-center p-20">
      {/* <div className="relative mx-auto w-full sm:w-[560px]">
        <Image
          alt="About Image"
          src={`https://techstore.app.erxes.io/api/read-file?key=${aboutUsArticles[0]?.image?.url}`}
          layout="intrinsic"
          width={500}
          height={250}
          className="rounded-2xl w-full"
        />
      </div>
      {renderLongBanners}
      <div className="relative mx-auto my-8 w-full sm:w-[990px]">
        <Image
          alt="About Image bottom"
          src={`https://techstore.app.erxes.io/api/read-file?key=${aboutUsArticles1[0]?.image?.url}`}
          layout="intrinsic"
          width={1000}
          height={350}
          className="rounded-2xl w-full"
        />
      </div> */}
      <div className="px-4 sm:px-[20px] mx-auto my-8 ">
        <div
          className="text-lg text-gray-800 block"
          dangerouslySetInnerHTML={{ __html: aboutUsArticles[0]?.content }}
        ></div>
      </div>
    </div>
  );
}


// import CarouselClient from "@/components/grid-banner/carousel";
// import { getKbArticlesByCode } from "@/sdk/queries/kb";
// import Image from "next/image";
// import React from "react";

// export const revalidate = 1;

// export default async function AboutUs() {
//   const { articles: aboutUsArticles } = await getKbArticlesByCode("about_us");

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       {/* Optional: if you want to include images or other components, uncomment them */}
//       {/* <div className="relative mx-auto w-full sm:w-[560px]">
//         <Image
//           alt="About Image"
//           src={`https://techstore.app.erxes.io/api/read-file?key=${aboutUsArticles[0]?.image?.url}`}
//           layout="intrinsic"
//           width={500}
//           height={250}
//           className="rounded-2xl w-full"
//         />
//       </div> */}
      
//       <div className="px-4 sm:px-[20px] mx-auto my-8 text-center">
//         <div
//           className="text-lg text-gray-800 block"
//           dangerouslySetInnerHTML={{ __html: aboutUsArticles[0]?.content }}
//         ></div>
//       </div>
//     </div>
//   );
// }
