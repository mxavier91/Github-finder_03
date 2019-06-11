import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// Stateless Functional Components
const Useritem = ({ user: { login, avatar_url, html_url } }) => {
    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>
        <h3>{login}</h3>
        <div>
          <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
      </div>
    )
  }

  Useritem.propTypes = {
    user: PropTypes.object.isRequired,
  };



  // Class based Components
  // class Useritem extends Component {
  //   render() {
  //     const { login, avatar_url, html_url } = this.props
  //     return (
  //       <div className="card text-center">
  //         <h1>Useritem</h1>
  //         <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}/>
  //         <h3>{login}</h3>
  //         <div>
  //           <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
  //         </div>
  //       </div>
  //     )
  //   }
  // }

export default Useritem
