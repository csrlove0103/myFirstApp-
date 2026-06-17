import { createContext, useContext, useState, ReactNode } from "react";

export interface UserInfo {
  id: string;
  name: string;
}

interface UserContextType {
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
  profileImage: string | null;
  setProfileImage: (img: string | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  profileImage: null,
  setProfileImage: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser, profileImage, setProfileImage }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
