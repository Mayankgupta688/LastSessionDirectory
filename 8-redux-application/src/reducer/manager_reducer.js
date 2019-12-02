export default function managers(state=null, action) {
    if(action.type == "GET_MANAGER_LIST") {
        return action.payload
    }

    return state;
}