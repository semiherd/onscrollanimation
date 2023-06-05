import React, {useContext,useReducer} from 'react';
import { appReducer } from './AppReducer';

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

function AppProvider({ children }) {
  const [appState, appDispatch] = useReducer(appReducer, {});
  return (
      <AppStateContext.Provider value={appState}>
         <AppDispatchContext.Provider value={appDispatch}>
            {children}
         </AppDispatchContext.Provider>
      </AppStateContext.Provider>
  );
}

function useAppState() {
    const context = useContext(AppStateContext);   
    if (context === undefined) {
      throw new Error('useAppState must be used within a Provider');
    }
    return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a Provider');
  }
  return context;
}

export { AppProvider,useAppState,useAppDispatch };