export type CreateCardProps = {
  id: number;
  file: any;
  price: number;
  title: string;
  realty: string;
  rent: string;
  location: string | null;
  description?: string;
};

export type ShowNDeleteCardProps = {
  id: number;
};

export type EditCardProps = {
  file: any;
  data: any;
};

export type UploadImageProps = {
  id: number;
  file: any;
};
