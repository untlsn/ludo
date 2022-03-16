const argsToCss = (obj: object) => Object.fromEntries(
  Object.entries(obj).map(([key, val]) => [`--${key}`, val]),
);

export default argsToCss;
