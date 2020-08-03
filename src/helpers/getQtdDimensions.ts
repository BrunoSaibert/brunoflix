export const getQtdDimensions = () => {
  const { innerWidth: width } = window;

  let qtd = 2;

  if (width >= 1800) {
    qtd = 6;
  } else if (width >= 1500) {
    qtd = 5;
  } else if (width >= 1000) {
    qtd = 4;
  } else if (width >= 800) {
    qtd = 3;
  } else if (width >= 600) {
    qtd = 2;
  } else {
    qtd = 1;
  }

  return qtd;
};
