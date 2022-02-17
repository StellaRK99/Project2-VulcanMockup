import React from 'react'

function NewsletterForm() {
  return (
    <form>
        <label for="email">Stay in the know. Sign up for our newsletter.</label>
        <input type="text" id="email" placeholder="Enter your email"></input>
        <button type="submit">SUBMIT</button>
    </form>
  )
}

export default NewsletterForm