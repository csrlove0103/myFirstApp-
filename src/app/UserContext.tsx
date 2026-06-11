import { createContext, useContext, useState, ReactNode } from "react";

export interface UserInfo {
  id: string;
  name: string;
}

interface UserContextType {
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
