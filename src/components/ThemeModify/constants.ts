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
  [ThemeEnum.LIGHT]: 'linear-gradient(-45deg,#ffffff 50%,#b19ffb 50%)',
  [ThemeEnum.DARK]: 'linear-gradient(-45deg,var(--td-gray-color-13) 50%,#b19ffb 50%)',
  [ThemeEnum.CHERRY]: 'linear-gradient(-45deg,#ffffff 50%,#d6657d 50%)',
};
