/* eslint-disable no-unused-vars */
export const themeModeKey = 'CHANGE-TEST-THEME-MODE';

export const setTheme = (theme: string) => {
  if (document.documentElement.getAttribute('theme-mode') === theme) {
    return;
  }
  document.documentElement.setAttribute('theme-mode', theme);
  localStorage.setItem(themeModeKey, theme);
};

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
  CHERRY = 'cherry',
}

export const themePanelMap = {
  [ThemeEnum.LIGHT]: 'linear-gradient(135deg,#ffffff,#ffffff,#b19ffb)',
  [ThemeEnum.DARK]: 'linear-gradient(135deg,var(--td-gray-color-13),#b19ffb)',
  [ThemeEnum.CHERRY]: 'linear-gradient(135deg,#ffffff,#d6657d)',
};
