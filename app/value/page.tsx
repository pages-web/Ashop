import { getKbArticlesByCode } from "@/sdk/queries/kb";

export default async function Value() {
  const { articles } = await getKbArticlesByCode("value");

  return (
    <div className="mx-auto max-w-screen-lg px-4 min-h-screen p-20">
      {articles.map((article, index) => (
        <div key={index} className="mb-6">
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      ))}
    </div>
  );
}