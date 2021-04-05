import { ModalProvider } from "./modals";
import { UserProvider } from "./user";

function GlobalProvider({children} : {children : React.ReactNode}){
    return(
        <>
            <UserProvider>
                    <ModalProvider>
                            {children}
                    </ModalProvider>
            </UserProvider>
        </>
    )
}
export default GlobalProvider;