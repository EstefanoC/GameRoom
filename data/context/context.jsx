import { useState, createContext } from 'react';

const SettingsContext = createContext({});

export function SettingsContextProvider({children}) {
  const [settings, setSettings] = useState({
    start: false,
    time: false,
    difficulty: true,
    plays: 0,
    loser: 0,
    winner: 0
  })

    return (
        <SettingsContext.Provider value={{ settings, setSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext