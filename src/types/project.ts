export type TProject = {
    id: string;
    name: string;
    description: string;
    features: string[];
    github: {
      frontend: string;
      backend: string;
    };
    live: {
      frontend: string;
      backend: string;
    };
    images: {
      fullScreen: string;
      topBanner: string;
      products: string;
      login: string;
      dashboard?: {
        title: string;
        img: string;
        features: string[];
      }[];
      mobile: string[];
    };
    technologies: string[];
    challenges: string[];
    futurePlans: string[];
  };
  