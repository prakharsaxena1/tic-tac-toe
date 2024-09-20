import React from "react";

type ThemeModes = "dark" | "light";

const Heading: React.FC = () => {
  const [theme, setTheme] = React.useState<ThemeModes>("dark");
  const [toggle, setToggle] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    setToggle((prev) => !prev);
  };

  return (
    <div className="text-center p-3 mb-4">
      <p className="text-4xl font-semibold">Tic tac toe</p>
      {/* Switch mode */}
      <div className="flex justify-center items-center gap-1 m-2">
        <span className={`font-light text-lg px-2 rounded-full ${theme === 'light' ? 'text-gray-400' : 'bg-gray-600' }`}>Dark</span>
        <div className="bg-slate-900 w-[40px] h-[20px] rounded-full overflow-hidden flex items-center p-1 cursor-pointer" onClick={handleThemeChange}>
          <div className={`w-[12px] h-[12px] bg-slate-50 rounded-full transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-5'}`}></div>
        </div>
        <span className={`font-light text-lg px-2 rounded-full ${theme === 'dark' ? 'text-gray-500' : 'bg-gray-300' }`}>Light</span>
      </div>
    </div>
  );
};

export default Heading;
