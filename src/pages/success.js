import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

export default function success() {
  return (
    <Layout>
        <Helmet>
            <title>Thanks for your Email</title>
            <meta name="description" content="Email Confirmation" />
        </Helmet>
        
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Thanks for your message!</h1>
                    </header>
                    <p>We'll get back to you ASAP</p>
                    <p>- RSC Media Team</p>
                </div>
            </section>
        </div>

    </Layout>
  )
}
