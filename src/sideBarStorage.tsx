import React, {createContext, useState} from 'react';

interface SideBarContextValue{
    sideBarOpen: boolean,
    updateSideBarOpen: (props: boolean) => void
}
const SideBarContext = createContext<SideBarContextValue | null>(null);

const SideBarStorage: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const updateSideBarOpen = (props: boolean) => {
        setSideBarOpen(props);
    }
    
    const sideBarValue: SideBarContextValue = {
        sideBarOpen,
        updateSideBarOpen
    }

    return(
        <SideBarContext.Provider value={sideBarValue}>
            {children}
        </SideBarContext.Provider>
    )
}

export { SideBarContext, SideBarStorage};