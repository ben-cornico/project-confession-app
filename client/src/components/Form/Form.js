import React, { Component } from 'react';
import './Form.css'
import ReCAPTCHA from 'react-google-recaptcha';
import axios from '../../Axios';



export class Form extends Component {
    constructor() {
        super();
        
        this.state = {
            selectOptionActive: false,
            optionSelected: "",
            recaptchaVal: "",
            load: false,
        }

        this.recaptchaRef = React.createRef()
        this.selectOption = this.selectOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.asyncScriptOnLoad = this.asyncScriptOnLoad.bind(this)
    }

    selectOption(e) {
        this.setState({
            optionSelected: e.target.lastChild.innerText,
            selectOptionActive: false,
        })
    }


    async handleSubmit (e) {
        e.preventDefault();
        console.log(e)
        const token = this.state.recaptchaVal
        const body = e.target[7].value;
        const cat = this.state.optionSelected;

        await axios.post('/confess', {token, body, cat})
            .then(res => console.log(res))
            .catch((error) => {
                console.log(error)
            })

    }

    asyncScriptOnLoad() {
        console.log("MAYAT KUMAN")
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({load: true})
        }, 1500)
        

    }


    test() {
        console.log("LOADED")
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

                <ReCAPTCHA
                    ref={this.recaptchaRef}
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={(val) => this.setState({recaptchaVal: val})} 
                    asyncScriptOnLoad={this.asyncScriptOnLoad}
                    onLoad={this.test}
                />

            
        
        <button className='btn-confess'>Confess</button>
      </form>
    )
  }
}

export default Form


