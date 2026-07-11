export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectCodeSnippet {
  label: string;
  language: string;
  code: string;
}

export interface Project {
  slug: string;
  year: string;
  title: string;
  role: string;
  summary: string;
  description: string;
  tags: string[];
  images: ProjectImage[];
  code?: ProjectCodeSnippet;
  liveUrl?: string;
  repoUrl?: string;
}
