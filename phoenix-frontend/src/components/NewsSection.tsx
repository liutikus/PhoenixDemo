import { useEffect, useState } from "react"
import { fetchNews } from "../api/strapi";
import type { News } from "../types/types";
import NewsCard from "./NewsCard";
import { useParams } from "react-router-dom";

const NewsSection = () => {

    const [news,setNews] = useState<News[] | null>(null);
    const {lng} = useParams();

useEffect(() => {
  fetchNews(lng)
    .then((data) => {
      const sortedNews = [...data].sort((a, b) => {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      });
      setNews(sortedNews);
    })
    .catch(console.error);
}, [lng]);

  return (
    <section className="md:px-[60px] md:py-[4em] p-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
