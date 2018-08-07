const calcScrollLeft = (windowWidth, tabWidth, current) => {
  let scrollInit = current * windowWidth * tabWidth;

  if (current <= 2) {
    scrollInit = 0;
  } else {
    scrollInit = (current - 2) * windowWidth * tabWidth;
  }

  return scrollInit;
};

export default {
  calcScrollLeft,
};
