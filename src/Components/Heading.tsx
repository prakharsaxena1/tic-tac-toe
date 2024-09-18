import React from "react";

export const DarkThemeIcon = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23a258.156 258.156 0 0 0 -46.775-4.28c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
    </svg>
  );
};

export const LightThemeIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden="true"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m0 0h24v24h-24z"
        fill="#fff"
        opacity="0"
        transform="matrix(-1 0 0 -1 24 24)"
      />
      <g fill="#fff">
        <path d="m12 6a1 1 0 0 0 1-1v-2a1 1 0 0 0 -2 0v2a1 1 0 0 0 1 1z" />
        <path d="m21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
        <path d="m6 12a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z" />
        <path d="m6.22 5a1 1 0 0 0 -1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z" />
        <path d="m17 8.14a1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 -1.35-1.47l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z" />
        <path d="m12 18a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1-1z" />
        <path d="m17.73 16.14a1 1 0 0 0 -1.39 1.44l1.44 1.42a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z" />
        <path d="m6.27 16.14-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0 -1.39-1.44z" />
        <path d="m12 8a4 4 0 1 0 4 4 4 4 0 0 0 -4-4z" />
      </g>
    </svg>
  );
};

type ThemeModes = "dark" | "light";

const Heading: React.FC = () => {
  const [theme, setTheme] = React.useState<ThemeModes>("dark");
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="text-center p-3 mb-4">
      <p className="text-4xl font-semibold">Tic tac toe</p>
      <div className="flex items-center justify-center mt-3">
        <p className="text-2xl mr-5">{theme === 'dark' ? 'Dark' : 'Light'}</p>
        <div onClick={handleThemeChange} className="dark:bg-white bg-slate-800 w-fit p-1 rounded-full transition-all duration-200 cursor-pointer">
          {theme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}
        </div>
      </div>
    </div>
  );
};

export default Heading;
