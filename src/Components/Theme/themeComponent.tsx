import { useTheme } from "../../Context/themeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${
        theme === "light" ? "bg-yellow-400 text-black" : "bg-black text-yellow-400"
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Yellow and Black Theme</h1>
        <p className="mt-4 text-lg">
          This component changes its theme based on the selected mode (light or dark).
        </p>
        <button
          onClick={toggleTheme}
          className="mt-6 px-4 py-2 rounded-md bg-yellow-500 text-black dark:bg-yellow-300 dark:text-black"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeComponent;
