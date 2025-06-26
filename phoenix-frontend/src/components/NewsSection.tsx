import { useEffect, useState } from "react"
import { fetchNews } from "../api/strapi";
import type { News } from "../types/types";
import NewsCard from "./NewsCard";

const NewsSection = () => {

    const [news,setNews] = useState<News[] | null>(null);

useEffect(() => {
  fetchNews()
    .then((data) => {
      const sortedNews = [...data].sort((a, b) => {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      });
      setNews(sortedNews);
    })
    .catch(console.error);
}, []);

  return (
    <section className="px-[60px] py-[4em] ">
        <div className="grid grid-cols-3 gap-4 ">
            {news?.map(({title, team_member, publishDate, documentId}, index)=>(
                <div key={index}>
                    <NewsCard title={title} teamMember={team_member} id={documentId} publishDate={publishDate} />
                    
                </div>
            ))}
        </div>
    </section>
  )
}

export default NewsSection
