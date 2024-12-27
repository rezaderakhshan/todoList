import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const ThemeRegistery = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>
    </ThemeProvider>
  );
};

export default ThemeRegistery;
