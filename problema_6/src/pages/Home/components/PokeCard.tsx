import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { PokemonService } from "../../../common/services/PokemonService";
import { Pokemon } from "../../../common/types/Pokemon";
import Loader from "../../../components/Loader";
import PokeInfo from "./PokeInfo";
import PokeStatsList from "./PokeStatsList";
import { useQuery } from "react-query";
const pokemonService = new PokemonService();
interface PokeCardProps {
  query: string;
}

function PokeCard(props: PokeCardProps){
   
    const {query} = props
    const {data, isLoading, error} = useQuery<Pokemon>(['pokemon', query], () => pokemonService.getPokemonByQuery(query))
    if(isLoading){
        return <Loader/>
    }

    if(error){
        return <Typography variant="h4">Pokemon not found</Typography>
    }
    // if no data, component will not be rendered
    if (!data?.name) {
        return undefined;
    }
    return (
      <>
      <Box
          component={Paper}
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4">{data?.name} ({data?.id})</Typography>
          {data && <PokeInfo type={data?.types[0].type.name} height={data?.height} weight={data?.weight} />}
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              mx: "32px",
              px: 2,
              py: 2,
              my: 4,
              "& img": {
                width: "100%",
              },
            }}
          >
            <img src={data?.sprites?.front_default} alt={data?.name} />
          </Box>
          <Box>
            <PokeStatsList stats={data?.stats} />
          </Box>
        </Box>
        
      </>
    );

}

export default PokeCard;
