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
  feedId : number,
  clubName : string,
  profileImage : string,
  isFollow : boolean,
  uploadAt : string,
  pin : boolean,
  content : string,
  media : string[], 
  isFlag : boolean,
  flags : number,
}