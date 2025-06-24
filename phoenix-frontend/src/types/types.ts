export type Employee = {
    Image: {
        url: string
    },
    Role:string,
    Name:string,
    id: number
}

export type Testimonial = {
    name: string,
    job: string,
    text: string,
    profileImg: string
}

export type Sponsor = {
    CompanyName: string,
    Logo:{
        url:string,
    }
}

export type Project = {
   active: boolean,
   bannerImage:{
    url: string
   }
   finishDate: string,
   startDate:string,
   images: [{
    url:string
   }],
   location:string,
   partners:[{
    partnerName: string
   }],
   projectPurpose:string,
   results: [{
    description: string
   }],
   title:string,
   documentId: string 
}

export type News = {
    descriptions: [{
        description:string
    }],
    images: [{
        url:string
    }],
    mainImage:{
        url:string
    },
    title:string,
    publishDate:string,
    team_member: Employee,
    documentId:string
}