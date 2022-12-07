import React from "react";
import { List, Typography, ListItem } from "@mui/material";
import { decagramToKg, decameterToM } from "../../../common/utils/metrics.utils";
interface PokeInfoProps {
  type: string | undefined;
  height: number | undefined;
  weight: number | undefined;
}
function PokeInfo(props: PokeInfoProps) {
  const [height, setHeight] = React.useState<number | undefined>(0);
  const [weight, setWeight] = React.useState<number | undefined>(0);
  React.useEffect(() => {
    if (props.height) {
      setHeight(decameterToM(props.height));
    }
    if (props.weight) {
      setWeight(decagramToKg(props.weight));
    }
  }, [props.height, props.weight]);
  const convertedHeight = height ? `${height} m` : "Unknown";
  const convertedWeight = weight ? `${weight} kg` : "Unknown";
  
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
          Height: <Typography component="span">{convertedHeight}</Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Weight: <Typography component="span">{convertedWeight}</Typography>
        </Typography>
      </ListItem>
    </List>
  );
}

export default PokeInfo;
