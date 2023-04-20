import React from 'react'
import banner from '../images/netflixbanner.jpg';
import PropTypes from 'prop-types'

const Header = (props) => {
    const firstName = 'Pratyush';
  
    // let player = 'Mario';
    // const handleClick = () => {
    //   player = 'Luigi';
    //   console.log(player);
    // }

    return (
        <header className="App-header">
            <h1>{props.title}</h1>
            <p>Hello {firstName}</p>
            {/* from source folder as dynamic - import to use */}
            <img src={banner} className='banner-img' alt='banner-img' width={250} />
            {/* from public folder - direct use */}
            <img src='logo192.png' className='banner-img' alt='banner-img' />
        </header>
    )
}

export default Header

// Default prop
Header.defaultProps = {
    title: "Your title"
}
// Prop Type (like TS)
Header.propTypes = {
    title: PropTypes.string
}
