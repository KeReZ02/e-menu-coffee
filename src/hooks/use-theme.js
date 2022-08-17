import {useLayoutEffect, useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(sessionStorage.getItem('app-theme') || 'light')

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        sessionStorage.setItem('app-theme', theme)
    }, [theme])
    return {theme, setTheme}
}