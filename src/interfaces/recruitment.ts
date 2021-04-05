export default interface Recruitment {
    clubName: string;
    content: string;
    feedId: number;
    flag: boolean;
    flags: number;
    follow: boolean;
    media: string[];
    owner: boolean;
    pin: boolean;
    profileImage: string;
    uploadAt: Date;
  }
  
  interface StateRecruitment {
    loading: boolean;
    data: Recruitment | null;
    error: boolean;
  }
  
  export interface RecruitmentType {
    Recruitment: StateRecruitment;
  }
  