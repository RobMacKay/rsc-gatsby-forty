import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>RSC Media</strong> <span>Development, Applications &amp; Consultation</span></Link>
        
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
