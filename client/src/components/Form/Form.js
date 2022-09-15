import React, { useState, useRef } from 'react';
import './Form.css'
import axios from '../../Axios';
import { useNavigate } from 'react-router-dom';


function Form() {
    const [selectOptionActive, setSelectOptionActive] = useState(false);
    const [optionSelected, setOptionSelected] = useState("");
    const [emptyCat, setEmptyCat] = useState(false);
    const [emptyConfession, setEmptyConfession] = useState(false);
    const navigate = useNavigate();
    const confessionRef = useRef()
    const selectOption = (e) => {
        setOptionSelected(e.target.lastChild.innerText);
        setSelectOptionActive(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = confessionRef.current.value;
        const cat = optionSelected;

        if(cat === "") {
            setEmptyCat(true)
        } if(body === "") {
            setEmptyConfession(true)
        } if(body !== "" && cat !== "") {
            await axios.post('/confess', {body, cat})
                .catch((error) => {
                console.log(error)
            })
            navigate('/')
        }

    }
  return (
    <form className='confession-form' onSubmit={(e) => handleSubmit(e)}>
        <h1 className="title">Submit Confession</h1>
        <div className="form-group">
            <div className="select-box">
                <div className={selectOptionActive ? 'options-container active' : 'options-container'}>

                    <div className="option" onClick={selectOption}>
                        <input type="radio" name="category" id="dream" className="cat-radio" />
                        <label htmlFor="dream">Dream</label>
                    </div>

                    <div className='option' onClick={(e) => selectOption(e)}>
                        <input type="radio" name="category" id="guilt" className="cat-radio" />
                        <label htmlFor="guilt">Guilt</label>
                    </div>

                    <div className='option' onClick={selectOption}>
                        <input type="radio" name="category" id="pain" className="cat-radio" />
                        <label htmlFor="pain">Pain</label>
                    </div>

                    <div className="option" onClick={selectOption}>
                        <input type="radio" name="category" id="wild" className="cat-radio" />
                        <label htmlFor="wild">Wild</label>
                    </div>

                    <div className="option" onClick={selectOption}>    
                        <input type="radio" name="category" id="regret" className="cat-radio" />
                        <label htmlFor="regret">Regret</label>
                    </div>

                    <div className="option" onClick={selectOption}>
                        <input type="radio" name="category" id="fantasy" className="cat-radio" />
                        <label htmlFor="fantasy">Fantasy</label>
                    </div>
                    
                    <div className="option" onClick={selectOption}>
                        <input type="radio" name="category" id="other" className="cat-radio" />
                        <label htmlFor="truth">Truth</label>
                    </div>

                    <div className="option" onClick={selectOption}>
                        <input type="radio" name="category" id="other" className="cat-radio" />
                        <label htmlFor="other">Other</label>
                    </div>
                    
                </div>

                <div className="selected" onClick={() => setSelectOptionActive(!selectOptionActive)}>
                    {
                        optionSelected ? (
                            optionSelected
                        ) : (
                            'Select Category'
                        )
                    }
                    <span className={selectOptionActive ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'}></span>
                </div>
                <div className={emptyCat ? "error show" : "error"}>Please select category!</div>
            </div>
        </div>

        <textarea name="confession" ref={confessionRef} id="confession" className='confession-body' placeholder='What is your confession?' ></textarea>    
        <div className={emptyConfession ? "error show" : "error"}>Enter your confession!</div>
        <button className='btn-confess'>Confess</button>
      </form>
  )
}

export default Form