import { CssBaseline, StyledEngineProvider } from "@mui/material";
import './App.css'
import { ThemeProvider } from "@mui/system";

import themes from './themes/index.ts';
import NavigationScroll from "./layout/NavigationScroll.ts";

function App() {


  return (
      <StyledEngineProvider injectFirst={false}>
          <ThemeProvider theme={themes}>
          <CssBaseline />
              <NavigationScroll>

              </NavigationScroll>

          </ThemeProvider>
      </StyledEngineProvider>
  )
}

export default App
