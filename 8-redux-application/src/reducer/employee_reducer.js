export default function employees(state=[], action) {
    debugger;
    if(action.type == "GET_EMPLOYEE_LIST") {
        return [
            ...state,
            ...action.payload
        ]
    }

    return state;
}