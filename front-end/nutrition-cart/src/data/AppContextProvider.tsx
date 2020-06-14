import React, { createContext, useReducer, useState } from "react";

// const initialState = {
//   token: "",
// };

export interface IProviderProps {
  children?: any;
}

type AppContextState = { token: string; }

const appCtxDefaultValue = {
  state: { token: ""},
  setState: (state: AppContextState) => {}, // noop default callback
};

export const AppContext = createContext(appCtxDefaultValue);

// let reducer = (state: any, action: { type: any; token: string; }) => {
//   switch (action.type) {
//     case "setCount": {
//       return { ...state, token: action.token };
//     }
//   }
//   return state;
// };

const AppContextProvider: React.FC = (props: IProviderProps) => {
  // const fullInitialState = {
  //   ...initialState,
  // };

  // const [data, setData] = useState<string>("");
   const [state, setState] = useState(appCtxDefaultValue.state);

  return (
     <AppContext.Provider value={{ state, setState }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
