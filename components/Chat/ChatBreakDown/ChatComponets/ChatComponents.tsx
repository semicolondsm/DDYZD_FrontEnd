import { ChatData } from "../../../../interfaces";
import Apply from "./Apply/Apply";
import ClubChat from "./ClubChat/ClubChat";
import InterviewResult from "./InterviewResult/InterviewResult";
import InterviewSchedule from "./InterviewSchedule/InterviewSchedule";
import UserChat from "./UserChat/UserChat";
import Answer from "./Answer/Answer";

function ChatComponents({ data, info }: { info: any; data: ChatData }) {
  return (
    <>
      {data?.user_type === "C" ? (
        <UserChat info={info} data={data}></UserChat>
      ) : data?.user_type === "U" ? (
        <ClubChat data={data}></ClubChat>
      ) : data?.user_type === "H1" ? (
        <Apply info={info} data={data}></Apply>
      ) : data?.user_type === "H2" ? (
        <InterviewSchedule info={info} data={data}></InterviewSchedule>
      ) : data?.user_type === "H3" ? (
        <InterviewResult info={info} data={data}></InterviewResult>
      ) : data?.user_type === "H4" ? (
        <Answer data={data} />
      ) : null}
    </>
  );
}
export default ChatComponents;
