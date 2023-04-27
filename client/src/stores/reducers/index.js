import { combineReducers } from "redux";

// import habitReducer from "./habit";
// import detailReducer from "./detail";
// import dailyReducer from "./daily";
// import weeklyReducer from "./weekly";
// import monthlyReducer from "./monthly";
import portfolioReducer from "./portfolio";

const rootReducer = combineReducers({
  //   habitReducer,
  //   detailReducer,
  //   dailyReducer,
  //   weeklyReducer,
  //   monthlyReducer,
  portfolioReducer,
});

export default rootReducer;
