import { combineReducers } from "redux";

import ourTeamReducer from "./components/OurTeam/OurTeam.reducers";

export const rootReducer = combineReducers({
  teamMembers: ourTeamReducer,
});
