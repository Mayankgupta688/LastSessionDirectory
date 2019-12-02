import { combineReducers } from "redux";

import employees from "./employee_reducer";
import managers from "./manager_reducer";

var rootReducer = combineReducers({
    employees: employees,
    managers: managers
})

export default rootReducer;

