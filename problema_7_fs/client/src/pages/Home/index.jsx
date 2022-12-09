import { Box } from '@mui/material'
import React from 'react'
import CustomTable from './components/Table'
function Home() {
  return (
    <Box sx={{
      maxWidth: '900px',
      margin: '0 auto',
    }}>
        <CustomTable />
    </Box>
  )
}

export default Home