import { createContext } from "react";

export interface AppContextElement {
    username : string,
    userEmail: string,
    theme    : ThemeContextType
};

export type ThemeContextType = "light" | "dark";

export const AppContext = createContext<AppContextElement | null>(null);