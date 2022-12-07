import React from 'react'
import {ListItem, Typography} from '@mui/material'
interface PokeStatListItemProps {
    stat: number | undefined
    icon: React.ReactNode | undefined
}

function PokeStatListItem(props: PokeStatListItemProps) {
  return (
    <ListItem> 
        <Typography sx={{
          fontSize: '20px'
        }}>
            {props.icon} {props.stat}
        </Typography>
    </ListItem>

  )
}

export default PokeStatListItem