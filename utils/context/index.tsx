import { FeedProvider } from "./feedProvider";
import { ModalProvider } from "./modals";
import { RecruitmentProvider } from "./recruitmentProvider";
import { UserProvider } from "./user";

function GlobalProvider({children} : {children : React.ReactNode}){
    return(
        <>
            <UserProvider>
                <FeedProvider>
                    <ModalProvider>
                        <RecruitmentProvider>
                            {children}
                        </RecruitmentProvider>
                    </ModalProvider>
                </FeedProvider>
            </UserProvider>
        </>
    )
}
export default GlobalProvider;