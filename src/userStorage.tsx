import React, { createContext, useState } from 'react';

interface UserData {
  name: string;
  weight: string;
  age: string;
  height:string;
  gender:string;
  // Add other data fields with their types as needed
}

interface UserContextValue {
  userData: UserData;
  updateUserData: (newData: Partial<UserData>) => void;
}

const UserContext = createContext<UserContextValue | null>(null);

console.log("here first")
console.log(UserContext)

//Structure of React.FC:
//React.FC<Props = {}> = (props: Props) => React.ReactNode;
const UserStorage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    weight: "",
    age:"",
    height:"",
    gender:"",
  });

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData({ ...userData, ...newData });
  };

  console.log("here second")
  console.log(userData)
  console.log(setUserData)

  const userDataValue: UserContextValue = {
    userData,
    updateUserData,
  };

  console.log("here third")
  console.log(userDataValue)

  return (
    <UserContext.Provider value={userDataValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };