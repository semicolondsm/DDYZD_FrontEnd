// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}
export interface ClubItemTableData {
  user_name: string,
  data : ClubItemData[],
  
}
export interface ClubItemData {
  item_state : string,
  item_name : string,
  option : string,
  link : string,
  amount : string,
  price : number,
  delivery_status : string
}

export interface FeedData {
  profile : string,
  name: string,
  content : string,
  src : string[],
  dday : number,
  flag : number,
  created_at : string
}

export interface ExampleState {
  count: number;
  error: null | Error;
  lastUpdate: number;
  light: boolean;
  placeholderData: User[] | null;
}
export interface ApiResult {
  id: number;
  name: string;
}

export interface ApiExampleState {
  apiResult: ApiResult | null;
  error: null | Error;
}