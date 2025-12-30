import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./providers/themeProvider";
import AppRoutes from "./pages/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
