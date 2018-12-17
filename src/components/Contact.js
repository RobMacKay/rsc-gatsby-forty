import React from 'react'
import { navigateTo } from "gatsby-link"

function encode(data) {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("form-name"),
        "name": form.getAttribute("name"),
        "email": form.getAttribute("email"),
        "message": form.getAttribute("message")
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
}

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact" method="POST" netlify-honeypot="bot-field" action="/success/" data-netlify="true" onSubmit={handleSubmit}>
                    <p class="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        <input type="hidden" name="form-name" value="contact" />
                    </p>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:information@rscmedia.co.uk">information@rscmedia.co.uk</a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
