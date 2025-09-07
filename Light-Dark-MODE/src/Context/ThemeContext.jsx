import { createContext, useState, useContext } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const HandleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, HandleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLightTheme = () => {
  const { theme, HandleThemeSwitch } = useContext(ThemeContext);

  return (
    <div
      className={`h-lvh flex flex-col items-center justify-center gap-4 transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold">Dark Mode And Light Mode</h1>
      <p>Hello, this is a basic webapp for practicing Dark Mode and Light Mode</p>
      <button
        onClick={HandleThemeSwitch}
        className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {theme === "dark" ? <FaRegSun size={24} /> : <FaMoon size={24} />}
      </button>
    </div>
  );
};
