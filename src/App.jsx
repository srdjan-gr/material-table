import { useState } from 'react'
import Table from './components/Table'
import { ThemeProvider, createTheme } from '@mui/material';

function App() {


  // const defaultMaterialTheme = createTheme();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fcba03',
      },
      secondary: {
        main: '#4fffd0',
      },
    },

  });

  return (
    <ThemeProvider theme={theme}>

      <div className='container'>
        <h1>Material table</h1>

        <Table />
      </div>

    </ThemeProvider>
  )
}

export default App
