export const BaseURL = import.meta.env.VITE_API_URL;

export const fetchTeamMembers = async (lng:string | undefined) => {
  const res = await fetch(`${BaseURL}/api/team-members?populate=*&locale=${lng}`);
  const data = await res.json();
  return data.data;
};

export const fetchAmbasadors = async (lng:string | undefined) => {
  const res = await fetch(`${BaseURL}/api/ambasadors?populate=*&locale=${lng}`);
  const data = await res.json();
  return data.data;
};

export const fetchSponsors = async () => {
  const res = await fetch(`${BaseURL}/api/sponsors?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchProjects = async (lng:string | undefined) => {
  const res = await fetch(`${BaseURL}/api/projects?populate=*&locale=${lng}`);
  const data = await res.json();
  return data.data;
};

export const fetchProjectById = async (documentId: string | undefined,lng:string | undefined) => {
  const res = await fetch(`${BaseURL}/api/projects/${documentId}?populate=*&locale=${lng}`);
  const data = await res.json();
  return data.data;
};

export const fetchNews = async (lng:string | undefined) => {
  const res = await fetch(`${BaseURL}/api/news?populate[team_member][populate]=Image&locale=${lng}`);
  const data = await res.json();
  return data.data;
};

export const fetchNewsById = async (documentId: string | undefined,lng:string | undefined) => {
  const res = await fetch(`${BaseURL}/api/news/${documentId}?populate=*&locale=${lng}`);
  const data = await res.json();
  return data.data;
};







