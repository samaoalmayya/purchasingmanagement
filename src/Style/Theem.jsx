const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          sam: { main: "#647488" },
        }
      : {
          // palette values for dark mode
          sam: { main: "#b92020" },
        }),
  },
});
export default getDesignTokens;
