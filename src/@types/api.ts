
export type ApiResponse = {
  id: string;
  name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  language: string;
  html_url: string;
}