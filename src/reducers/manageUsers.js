export default function manageUsers(state = {users: []}, action){

  switch(action.type) {

    case "ADD_USER":
      const user = {...action.user}
      return {...state, users: [...state.users, user]}

    default:
      return state
  }
}
