import React, { Component } from 'react';
import './Form.css'
import ReCAPTCHA from 'react-google-recaptcha';



export class Form extends Component {
    constructor() {
        super();

        this.state = {
            selectOptionActive: false,
            optionSelected: "",
        }

        this.selectOption = this.selectOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    selectOption(e) {
        this.setState({
            optionSelected: e.target.lastChild.innerText,
            selectOptionActive: false,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        const token = e.target[8].value;
        const body = e.target[7].value;
        const cat = this.state.optionSelected;


    }
  render() {
    return (
      <form className='confession-form' onSubmit={this.handleSubmit}>
        <div className="form-group">
            <div className="select-box">
                <div className={this.state.selectOptionActive ? 'options-container active' : 'options-container'}>

                    <div className="option" onClick={this.selectOption}>
                        <input type="radio" name="category" id="dream" className="cat-radio" />
                        <label htmlFor="dream">Dream</label>
                    </div>

                    <div className='option' onClick={this.selectOption}>
                        <input type="radio" name="category" id="guilt" className="cat-radio" />
                        <label htmlFor="guilt">Guilt</label>
                    </div>

                    <div className='option' onClick={this.selectOption}>
                        <input type="radio" name="category" id="pain" className="cat-radio" />
                        <label htmlFor="pain">Pain</label>
                    </div>

                    <div className="option" onClick={this.selectOption}>
                        <input type="radio" name="category" id="wild" className="cat-radio" />
                        <label htmlFor="wild">Wild</label>
                    </div>

                    <div className="option" onClick={this.selectOption}>    
                        <input type="radio" name="category" id="regret" className="cat-radio" />
                        <label htmlFor="regret">Regret</label>
                    </div>

                    <div className="option" onClick={this.selectOption}>
                        <input type="radio" name="category" id="fantasy" className="cat-radio" />
                        <label htmlFor="fantasy">Fantasy</label>
                    </div>

                    <div className="option" onClick={this.selectOption}>
                        <input type="radio" name="category" id="other" className="cat-radio" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div className="selected" onClick={() => this.setState({selectOptionActive: !this.state.selectOptionActive})}>
                    {
                        this.state.optionSelected ? (
                            this.state.optionSelected
                        ) : (
                            'Select Category'
                        )
                    }
                    <span className={this.state.selectOptionActive ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'}></span>
                </div>
            </div>
        </div>

        <textarea name="confession" id="confession" className='confession-body' placeholder='What is your confession?'></textarea>
        
        <ReCAPTCHA className="recaptcha" sitekey={process.env.REACT_APP_SITE_KEY} size="normal" onErrored={(err) => console.log(err) }/>
        
        <button className='btn-confess'>Confess</button>
      </form>
    )
  }
}

export default Form

