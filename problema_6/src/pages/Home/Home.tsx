import React from 'react'

import {Box, TextField ,Button} from '@mui/material'

import PokeCard from './components/PokeCard'
function Home() {
  const [query, setQuery] = React.useState('')
  const [currentQuery, setCurrentQuery] = React.useState('')
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCurrentQuery(query.toLocaleLowerCase())
  }

  return (
    <>
    <Box sx={{
      maxWidth: '500px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

    }}>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        my: 4,
        width: '100%',
      }}>
        <TextField value={query} onChange={(e) => setQuery(e.target.value)} label="Buscar" />
        <Button type='submit' variant="contained" onClick={(e) => handleSubmit(e)}>Buscar</Button>
      </Box>
      <PokeCard query={currentQuery}/>
    </Box>
    </>
  )
}

export default Home