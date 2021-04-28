const initialState = {
  photos:[],
  loading:false,
}

export default reducer (state = initialState, action){
  switch(action.type)
  {
    case 'MOVIES_LOADING':
      return {...state, loading:true}
    case 'MOVIES_LOADED':
      return {...state, photos:action.payload}
    default :
     return state;
  }
}