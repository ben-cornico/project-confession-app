import React, { Component } from 'react'

export class Privacy extends Component {
  render() {
    return (
      <div className='privacy'>
        <h1>Privacy</h1>
        <p>
          Privacy is the ability of an individual or group to seclude themselves or information about themselves and thereby reveal themselves selectively. The boundaries and content of what is considered private differ among cultures and individuals, but share basic common themes. Privacy is sometimes related to anonymity, the wish to remain unnoticed or unidentified in the public realm. When something is private to a person, it usually means there is something within them that is considered inherently special or personally sensitive. The degree to which private information is exposed therefore depends on how the public will receive this information, which differs between places and over time. Privacy can be seen as an aspect of security — one in which trade-offs between the interests of one group and another can become particularly clear.
        </p>
        <p>
          The right against unsanctioned invasion of privacy by the government, corporations or individuals is part of many countries’ privacy laws, and in some cases, constitutions. In some countries individual privacy may conflict with freedom of speech laws and some laws may require public disclosure of information which would be considered private in other countries and cultures.
        </p>

        <p className='bold'>
          Your confession is safe. It will never be share to anyone.
        </p>
      </div>
    )
  }
}

export default Privacy