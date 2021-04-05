import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type State = {
  modalName: string
};

type Action =| { type: 'SET_MODAL'; name: string }

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(_state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MODAL':
      return {
        modalName:action.name
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer,{modalName:''});

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function getState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function setState() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}