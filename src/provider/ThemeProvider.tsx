import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext.ts";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables.ts";
import { storage } from "../model/Storage.ts";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
    storage.setItem("theme", theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
