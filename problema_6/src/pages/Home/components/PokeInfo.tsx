import React from "react";
import { List, Typography, ListItem } from "@mui/material";
interface PokeInfoProps {
  type: string | undefined;
  height: number | undefined;
  weight: number | undefined;
}
function PokeInfo(props: PokeInfoProps) {
  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: 10,
        mx: 2,
        
      }}
    >
      <ListItem>
        <Typography>
          Type: <Typography sx={{textTransform: 'capitalize'}} component="span">{props.type}</Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Height: <Typography component="span">{props.height}</Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Weight: <Typography component="span">{props.weight}</Typography>
        </Typography>
      </ListItem>
    </List>
  );
}

export default PokeInfo;
