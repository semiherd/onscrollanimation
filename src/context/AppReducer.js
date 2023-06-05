export const appReducer = (prevState, action) => {
   switch (action.type) {  
      case 'scroll':    
         return {
            ...prevState,          
            scroll: action.data,
      }
      default:
         return prevState;
   }
};

