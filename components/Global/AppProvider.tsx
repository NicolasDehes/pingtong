import { createContext } from "react";

export type AppContextElement = {
    username : string,
    userEmail: string,
    theme    : ThemeContextType
} | null;

export type ThemeContextType = "light" | "dark";

export const AppContext = createContext<AppContextElement>(null);