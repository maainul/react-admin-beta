import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ProjectSidebar } from "./scenes/global/ProjectSidebar";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProjectSidebar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
