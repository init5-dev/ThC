import dayjs from "dayjs";

export const GITSTOR_CONFIG = {
  auth: process.env.PUBLIC_GITSTOR_AUTH || "",
  owner: process.env.PUBLIC_GITSTOR_OWNER || "",
  repo: process.env.PUBLIC_GITSTOR_REPO || "",
  author: process.env.PUBLIC_GITSTOR_AUTHOR || "",
  email: process.env.PUBLIC_GITSTOR_EMAIL || "",
  apiVersion: process.env.PUBLIC_GITSTOR_API_VERSION || "",
}

export const titleToPostname = (title: string) => {
  return title
    .trim() 
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/ /g, "~") 
    .toLowerCase() 
    .replace(/[^a-z0-9~]/g, ""); 
};

export const postnameToTitle = (postname: string) => {
  return postname
    .replace(/~/g, " ") 
    .replace(/-/g, " ") 
    .replace(/\b\w/g, char => char.toUpperCase()); 
};

export const now = () => dayjs().format('YYYY-MM-DD HH:mm:SS')
