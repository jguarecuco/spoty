import headers from '../headers';
import fetch from "node-fetch";
import {Leagues,} from "../../../imports/api/links";
import { v4 as uuidv4 } from 'uuid';

const leagues=async()=>{
    let resp = await fetch("https://v3.football.api-sports.io/leagues",{headers:headers});
    let respJson = await resp.json();
    Leagues.remove({});
    respJson.response.forEach((item)=>{
        let league = item.league;
        league.country = item.country;
        league.season = item.seasons
        Leagues.insert(league);
    })

   // console.log(respJson)
    return respJson;
}
export default  leagues();