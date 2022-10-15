
import './App.css';
import Main from './routes/main';
import { ThemeProvider } from '@mui/system';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
     <Main />
    </div>
    </ThemeProvider>
  );
}

export default App;
