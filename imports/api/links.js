import { Mongo } from 'meteor/mongo';

export const Sports = new Mongo.Collection('sports');
export const Leagues = new Mongo.Collection('leagues');
export const Fixtures = new Mongo.Collection('fixtures');
export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');
export const BookMarkers = new Mongo.Collection('bookMarkers');
export const Lineups = new Mongo.Collection('lineups');
export const PlayerStats = new Mongo.Collection("playerStats");
export const Events = new Mongo.Collection('events');
export const Odds = new Mongo.Collection("odds");
