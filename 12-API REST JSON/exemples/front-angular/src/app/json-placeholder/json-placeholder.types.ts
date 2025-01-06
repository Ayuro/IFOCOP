export interface JpPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface JpComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface JpAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface JpPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface JpTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface JpUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JpAddress;
  phone: string;
  website: string;
  company: JpCompany;
}

export interface JpAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: JpGeoLocation;
}

export interface JpGeoLocation {
  lat: string;
  lng: string;
}

export interface JpCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
