import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {

  // Detect system theme on first load
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const savedTheme = localStorage.getItem("theme");

    setTheme(savedTheme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  // Apply theme to HTML + save in localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button>
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={assets.sun_icon}
          alt=""
          className="w-8 p-1 border border-gray-500 rounded-full cursor-pointer"
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={assets.moon_icon}
          alt=""
          className="w-8 p-1 border border-gray-500 rounded-full cursor-pointer"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
