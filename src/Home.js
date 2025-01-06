import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box>
      <Typography variant='h4' sx={{textAlign: 'center'}}>Hello</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px'}}>
        <Button variant='contained' color='primary'><Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Click Me</Link></Button>
        <Button variant='contained' color='secondary'><Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Click Me</Link></Button>
      </Box>
    </Box>
  )
}

export default Home