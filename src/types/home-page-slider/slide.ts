import type { StaticImageData } from 'next/image';

export type Tslide = {
  id: number;
  text: string;
  image: string | StaticImageData;
  name: string;
  job: string;
};
