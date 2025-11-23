export const light = () => {
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
};

export const heavy = () => {
  if (navigator.vibrate) {
    navigator.vibrate([20, 30, 20]);
  }
};

export const selection = () => {
  if (navigator.vibrate) {
    navigator.vibrate(5);
  }
};
