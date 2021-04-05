import React, { createContext, useState } from "react";

const ModalContext = createContext<any>({
  modal_state: "",
  setModalState: () => {}
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  function setModalState(state: any){
    setModal((prevState: any) => {
        return {
          ...prevState,
          modal_state: state
        };  
      });
  }
  const init : any = {
      modal_state: "",
      setModalState,
  };
  const [modal, setModal] = useState(init);
  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
};

const { Consumer: ModalConsumer } = ModalContext;

export { ModalConsumer, ModalProvider };

export default ModalContext;



