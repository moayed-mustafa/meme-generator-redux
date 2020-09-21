import React from 'react'
import {useSelector, useDispatch } from 'react-redux'


export default function DisplayMeme() {

    const store = useSelector(state => state.meme)
    //  * I need to check if the state is full ---> show a delete button
    let isEmpty = Object.values(store).every(item => item === "")
    const dispatch = useDispatch()

    return (
        <>
            {
                isEmpty? null:

            <div className="meme-card">
                <h2  className="top">{store.text_top}</h2>
                <img src={store.meme_url} alt=""></img>
                <h2 className="bottom">{store.text_bottom}</h2>

                        <button
                            onClick={()=>dispatch({type: "DELETE_MEME"})}
                            className="delete-meme">Delete Meme</button>
                    </div>
              }
            </>
    )
}