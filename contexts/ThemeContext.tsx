// contexts/ThemeContext.js
import {createContext, useState, useContext, useEffect} from 'react';

const themes = [
    "default",
    "theme1",
    "theme2",
    "theme3"
]
type IsMobileDeviceFunction = () => boolean;

const ThemeContext = createContext({ theme: themes[0], toggleTheme: () => {}, isMobileDevice: false });

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState(themes[0]);
    const [isMobileDevice, setIsMobileDevice] =  useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (themes[((themes.findIndex((element) => element == theme) + 1) >= themes.length)? 0 : themes.findIndex((element) => element == theme) + 1]));
    };

    function ChangeIsMobileDevice() {
        setIsMobileDevice(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    useEffect(() => {
        ChangeIsMobileDevice()
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isMobileDevice }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
