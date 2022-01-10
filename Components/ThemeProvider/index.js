import React, {createContext} from 'react';


export const DARK = 'DARK';
export const LIGHT = 'LIGHT';
const ThemeContext = createContext({
    mode: LIGHT,
    setMode:() => {}
});

export default ThemeContext;