import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function MemeForm() {


    const initialState = {
        text_top: "",
        text_bottom: "",
        meme_url: "",
    }


    const [formData, setFormData] = useState(initialState)
    function changeData(e) {
        e.persist()
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))

    }

    // * make a function to validate the payload first and then return the formData
    //  * or hdie the button until the state is full ---> take this approach!
    const dispatch = useDispatch()

    function submitForm(e) {
        e.preventDefault()
        if (formData.meme_url === "") {
            setFormData(initialState)
            return
        }
        dispatch({ type: "ADD_MEME", payload: formData })
        setFormData(initialState)


    }




    return (

        <>
        <div>
            <form
                onSubmit={submitForm}
            >
                <div className="label-input">
                    <label htmlFor="text_top">Top Text:</label>
                    <input name="text_top" type="text"  value={formData.text_top} onChange={changeData}></input>
                </div>
                <div className="label-input">

                <label htmlFor="text_top">Bottom Text:</label>
                    <input name="text_bottom" type="text" value={formData.text_bottom} onChange={changeData}></input>
                </div>

                <div className="label-input">
                    <label htmlFor="meme_url">Image Url:</label>
                    <input name="meme_url" type="text" value={formData.meme_url} onChange={changeData}></input>
                </div>

                <button>Add Meme!</button>

            </form>
            </div>
            </>
    )
}