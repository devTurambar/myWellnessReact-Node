import React, { createContext, useState } from 'react';

interface UserData {
  name: string;
  weight: string;
  age: string;
  height:string;
  gender:string;
  tmb:string;
  ndc:string;
}
// TMB: O metabolismo basal refere-se à quantidade de energia (calorias) que o corpo queima em repouso para manter suas funções vitais, como respiração, circulação sanguínea e funcionamento dos órgãos. Ele é influenciado pela idade, sexo, composição corporal e genética. O metabolismo basal desempenha um papel fundamental no peso, uma vez que representa a maior parte das calorias queimadas diariamente.

//Indivíduos com metabolismo basal mais rápido tendem a queimar mais calorias, o que pode facilitar a perda de peso, enquanto aqueles com um metabolismo basal mais lento podem enfrentar um desafio adicional na manutenção do peso ideal. Portanto, compreender o metabolismo basal é crucial ao planejar estratégias de emagrecimento ou manutenção de peso saudável.

interface UserContextValue {
  userData: UserData;
  updateUserData: (newData: Partial<UserData>) => void;
}

const UserContext = createContext<UserContextValue | null>(null);

//Structure of React.FC:
//React.FC<Props = {}> = (props: Props) => React.ReactNode;
const UserStorage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    name: "John Doe",
    weight: "82",
    age:"33",
    height:"177",
    gender:"M",
    tmb:"",
    ndc:"",
  });

  const updateUserData = (newData: Partial<UserData>) => {
    setUserData({ ...userData, ...newData });
  };


  const userDataValue: UserContextValue = {
    userData,
    updateUserData,
  };

  return (
    <UserContext.Provider value={userDataValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };