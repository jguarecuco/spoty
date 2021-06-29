import fetch from "node-fetch";
import {Fixtures} from "../../../imports/api/links";
import { v4 as uuidv4 } from 'uuid';
import headers from "../headers";

const fixture = async (date) =>{
    
    let resp = await fetch("https://v3.football.api-sports.io/fixtures?date="+date,{headers:headers});
    let respJson = await resp.json();

    respJson.response.forEach((item)=>{
        let fixtures = item.fixture;
        fixtures.league = item.league;
        fixtures.teams = item.teams;
        fixtures.goals=item.goals;
        fixtures.score=item.score;

        if(Fixtures.find({id:fixtures.id}).count()==0) {
            Fixtures.insert(fixtures);
        }
    })

    return respJson;
}
export default fixture;