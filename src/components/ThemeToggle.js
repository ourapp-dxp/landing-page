import { useEffect, useState } from 'react'

function SunIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  )
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const themeColorLight = document.getElementById('theme-color-light');
    const themeColorDark = document.getElementById('theme-color-dark');

    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (themeColorLight) themeColorLight.setAttribute('content', '#000000');
      if (themeColorDark) themeColorDark.setAttribute('content', '#000000');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (themeColorLight) themeColorLight.setAttribute('content', '#ffffff');
      if (themeColorDark) themeColorDark.setAttribute('content', '#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      className="rounded-md bg-white dark:bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:ring-gray-300/30"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
    >
      <SunIcon className={`h-5 w-5 stroke-zinc-900 ${theme === 'dark' ? 'hidden' : 'block'}`} />
      <MoonIcon className={`h-5 w-5 stroke-white ${theme === 'dark' ? 'block' : 'hidden'}`} />
    </button>
  )
}
