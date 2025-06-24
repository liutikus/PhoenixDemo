export const BaseURL = import.meta.env.VITE_API_URL;

export const fetchTeamMembers = async () => {
  const res = await fetch(`${BaseURL}/api/team-members?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchAmbasadors = async () => {
  const res = await fetch(`${BaseURL}/api/ambasadors?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchSponsors = async () => {
  const res = await fetch(`${BaseURL}/api/sponsors?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchProjects = async () => {
  const res = await fetch(`${BaseURL}/api/projects?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchProjectById = async (documentId: string | undefined) => {
  const res = await fetch(`${BaseURL}/api/projects/${documentId}?populate=*`);
  const data = await res.json();
  return data.data;
};

export const fetchNews = async () => {
  const res = await fetch(`${BaseURL}/api/news?populate[team_member][populate]=Image`);
  const data = await res.json();
  return data.data;
};

export const fetchNewsById = async (documentId: string | undefined) => {
  const res = await fetch(`${BaseURL}/api/news/${documentId}?populate=*`);
  const data = await res.json();
  return data.data;
};







