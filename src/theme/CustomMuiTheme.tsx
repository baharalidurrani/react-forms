import { useMemo } from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { customDarkTheme, customLightTheme } from './customTheme';
import { muiCache } from './muiConfig';
// import { Theme } from "@mui/material/styles";
// declare module "@mui/styles/defaultTheme" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
//   interface DefaultTheme extends Theme {}
// }

interface Props {
  children: React.ReactNode;
}
export default function CustomMuiTheme(props: Props) {
  const goDarkQuery = useMediaQuery('(prefers-color-scheme: dark)');
  // const goLightQuery = useMediaQuery("(prefers-color-scheme: light)");

  const theme = useMemo(() => createTheme(goDarkQuery ? customDarkTheme : customLightTheme), [goDarkQuery]);

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </CacheProvider>
  );
}
