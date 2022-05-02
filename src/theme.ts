export const theme = {
  fontFamily: "'Poppins', sans-serif",
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 40, 48],
  iconSizes: [20, 40, 60, 80, 100],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: ["600px", "900px", "1200px", "1536px"],
  colors: {
    primary: "#3a4656",
    secondary: "#1976d2",
    foreground: "ffffff",
    error: "#FF6347",
    success: "#199f2c",
    info: "#299EB2",
  },
  shadows: {
    sm: "0px 1px 0px 0px rgb(0, 0, 0, 0.54)",
    md: "4px 4px 4px 0px rgba(0,0,0,0.54)",
    lg: "6px 6px 6px 0px rgba(0,0,0,0.54)",
  },
};

export type ThemeType = typeof theme;
