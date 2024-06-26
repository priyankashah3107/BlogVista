import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
   const [userInfo, setUserInfo] = useState({});

   return (
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
         {children}
      </UserContext.Provider>
   );
}

export default function useUserInfo() {
   return useContext(UserContext)
}
