import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LIGHT_THEME } from "./constants/theme";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import "./App.css";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === LIGHT_THEME ? "app--light" : "app--dark"}`}>
      <Navbar />
      <TaskManager />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
