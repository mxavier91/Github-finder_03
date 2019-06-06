import React from 'react';
import PropTypes from 'prop-types'


// Stateless Functional Components
const Navbar = ({icon, title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  )
}

Navbar.defaultProps = {
title: 'Github Finder',
icon: 'fab fa-github'
};

Navbar.propTypes = {
title: PropTypes.string.isRequired,
icon: PropTypes.string.isRequired
}



// Class based Components
// class Navbar extends Component {
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <nav className="navbar bg-primary">
//         <h1>
//           <i className={this.props.icon}></i> {this.props.title}
//         </h1>
//       </nav>
//     )
//   }
// }




export default Navbar
