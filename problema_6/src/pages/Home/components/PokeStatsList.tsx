import React from "react";
import {List, Typography, ListItem } from '@mui/material'
import { Stat } from "../../../common/types/Pokemon";
import PokeStatListItem from "./PokeStatListItem";
interface PokeStatsListProps {
  stats: Stat[] | undefined
}
function PokeStatsList(props: PokeStatsListProps) {
  // const {stats} = props
  /*
    stats order is: hp, attack, defense, special-attack, special-defense, speed
  */
  return (
    <List sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: 10,
        mx: 2,
    }}>
      <PokeStatListItem stat={props.stats?.[0].base_stat} icon={<i className='ra ra-health'></i>}/>
      <PokeStatListItem stat={props.stats?.[1].base_stat} icon={<i className='ra ra-battered-axe'></i>}/>
      <PokeStatListItem stat={props.stats?.[2].base_stat} icon={<i className='ra ra-shield'></i>}/>
      <PokeStatListItem stat={props.stats?.[3].base_stat} icon={<i className='ra ra-burning-embers special'></i>}/>
      <PokeStatListItem stat={props.stats?.[4].base_stat} icon={<i className='ra ra-shield special'></i>}/>
      <PokeStatListItem stat={props.stats?.[5].base_stat} icon={<i className='ra ra-boot-stomp'></i>}/>
      

    </List>
  );
}

export default PokeStatsList;
