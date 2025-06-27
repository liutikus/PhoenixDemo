import GalleryCard from "./GalleryCard"

type ProjectGalleryProps = {
  images: [{
    url: string 
  }] | undefined
  
};

const ProjectGallery = ({images} : ProjectGalleryProps) => {
  return (
    <section >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:space-y-6">
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
