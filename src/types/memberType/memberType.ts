import type { StaticImageData } from 'next/image';

export type memberType = {
  id: number;
  image: string | StaticImageData;
  name: string;
  job: string;
};
