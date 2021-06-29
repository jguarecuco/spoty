import { Meteor } from 'meteor/meteor';
import { Fixtures,Teams,Leagues } from '/imports/api/links';
import headers from './libs/headers';
import leagues from "./libs/leagues/leagues";
import fixture from "./libs/fixtures/fixtures";

const formatDate = (date) =>{
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
Meteor.startup(  async () => {
    //let leaguesResp = await leagues();
    //console.log(leaguesResp);
    let date = new Date();
    for(let i = 0;i<80;i++){
    let dateQuery = formatDate(date);
        console.log(dateQuery);
        let d=fixture(dateQuery);
        date.setDate(date.getDate()+1);
    }
});
