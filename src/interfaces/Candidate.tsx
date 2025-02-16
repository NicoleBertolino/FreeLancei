export interface Candidate {
    name: {
      title: string;
      fisrt: string;
      last: string;
    };
    phone: string;
    id: {
      name: string;
      value: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
};