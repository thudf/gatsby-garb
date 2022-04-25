import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import gatsbyLogo from '../images/gatsby-icon.png';

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' };
};

const NavLink = props => <Link getProps={isActive} {...props}/>

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
      <img src={gatsbyLogo} alt="Gatsby Garb Logo" style={{ maxWidth: '50px', borderRadius: '50%', border: '1px solid transparent', marginBottom: 0 }} />
      <h1 style={{ margin: 0 }}>
        <NavLink to="/">
          {siteTitle}
        </NavLink>
      </h1>

      <NavLink to='/blog'>Blog</NavLink>

      <NavLink to='/products'>Store</NavLink>

      {/* Shopping Cart Summary */}
      <div className='snipcart-summary snipcart-checkout'>
        <div>
          <strong>My Cart</strong>
        </div>

        <div>
          <span className='snipcart-total-items'></span>
          {' '}Items in Cart
        </div>

        <div>
          Total price {' '}
          <span className='snipcart-total-price'></span>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
