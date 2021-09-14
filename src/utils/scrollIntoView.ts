export const scrollIntoView = (dom: HTMLElement) => {
  dom.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};
