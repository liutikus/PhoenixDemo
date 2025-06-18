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

console.log(BaseURL)