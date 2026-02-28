import { useEffect, useState } from "react"

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "system"
    })

    useEffect(() => {
        const root = document.documentElement

        const applyTheme = (value: string) => {
            if (value === "system") {
                root.removeAttribute("data-theme")
                return
            }

            root.setAttribute("data-theme", value)
        }

        applyTheme(theme)

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
            const handleChange = () => applyTheme("system")

            mediaQuery.addEventListener("change", handleChange)
            return () => mediaQuery.removeEventListener("change", handleChange)
        }

    }, [theme])

    const updateTheme = (newTheme: string) => {
        if (newTheme === "system") {
            localStorage.removeItem("theme")
        } else {
            localStorage.setItem("theme", newTheme)
        }

        setTheme(newTheme)
    }

    return { theme, setTheme: updateTheme }
}