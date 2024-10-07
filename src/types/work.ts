export type Work = {
  id: string;
  companyName: string;
  site: string;
  platform: string;
  progress: "Completed" | "Ongoing";
  stack: string[];
  summary: string;
  description: string;
  images: string[];
  year: string;
};
