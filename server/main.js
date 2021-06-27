import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import headers from './libs/headers';
 

Meteor.startup(() => {
 console.log(headers);
});
