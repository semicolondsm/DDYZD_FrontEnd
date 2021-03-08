import Clubs from "./club";

export default interface UserData {
    clubs : Clubs[],
    email : string,
    gcn : string,
    github_url : string,
    image_path : string,
    name : string,
    user_id : number,
}