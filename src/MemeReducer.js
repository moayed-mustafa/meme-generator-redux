

//  * initital_state
const initialState = {meme:{text_top:"", text_bottom:"", meme_url:""}}
export default function MemeReducer(state = initialState, action) {
    console.log(action)
    //  * Actions
    switch (action.type) {
        //  * you would need to add the data because the state is empty right now
        case "ADD_MEME":
            return {
                ...state,
                meme:{

                    text_top:action.payload.text_top,
                            text_bottom:action.payload.text_bottom,
                            meme_url:action.payload.meme_url}
                }
        case "DELETE_MEME":
            return initialState


        default:
            return state
    }
}