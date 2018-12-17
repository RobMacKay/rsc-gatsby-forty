import React from 'react'
//import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="RSC Media - Web and Media Solutions Group"
                    meta={[
                        { name: 'description', content: 'RSC Media Company Website. A Company focused on the development and consultation of web applications and solutions' },
                        { name: 'keywords', content: 'Web Development, Web Applications, Applications, Software, Mobile Web, Consultation, Social Media' },
                    ]}
                >
                </Helmet>

                <Banner />

            </Layout>
        )
    }
}

export default HomeIndex