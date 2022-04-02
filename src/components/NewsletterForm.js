import React from 'react'

function NewsletterForm() {
  return (
    <section className="NewsletterForm">
    <form>
        <label htmlFor="email">Stay in the know. Sign up for our newsletter.</label>
        <input type="text" id="email" placeholder="Enter your email"></input>
        <button type="submit">SUBMIT</button>
    </form>
    </section>
    
  )
}

export default NewsletterForm