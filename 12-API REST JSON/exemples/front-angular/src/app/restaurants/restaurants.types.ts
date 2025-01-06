export interface ApiStatus {
  name: string;
  version: string;
  status: string;
}

export type PaginatedRestaurants = {
  results: RestaurantPreview[];
  total: number;
};

export type RestaurantPreview = Pick<
  Restaurant,
  '_id' | 'name' | 'borough' | 'cuisine' | 'restaurant_id'
>;

export interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  borough: string;
  address: RestaurantAddress;
  grades: RestaurantGrade[];
  restaurant_id: string;
}

export interface RestaurantAddress {
  building: string;
  street: string;
  zipcode: string;
  coord: [number, number];
}

export interface RestaurantGrade {
  date: string;
  grade: string;
  score: number;
}
