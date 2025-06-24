import GalleryCard from "./GalleryCard"

type ProjectGalleryProps = {
  images: [{
    url: string 
  }] | undefined
  
};

const ProjectGallery = ({images} : ProjectGalleryProps) => {
  return (
    <section className="px-[60px] pb-[4em]">
        <div className="grid grid-cols-3 gap-x-4 space-y-6">
        {images?.map(({url}, index)=>(
            <div key={index}>
                <GalleryCard img = {url}/>

            </div>
        ))}
        </div>
    </section>
  )
}

export default ProjectGallery
