import React, { Component } from "react";

class UserItem extends Component {
  //------- frist way

  //   constructor() {
  //     super();
  //     this.state = {
  //       id: "id",
  //       login: "mojombo",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo",
  //     };
  //   }

  //------ second way

  //   state = {
  //     id: "id",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   };

  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
          {/* <Link to={`/user/${this.state.login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link> */}
        </div>
      </div>
    );
  }
}

export default UserItem;
