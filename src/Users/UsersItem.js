import React, { Component } from "react";

export class UsersItem extends Component {

    state = {
      id: "id",
      login: "codefingas",
      avatar_url:
        "https://avatars0.githubusercontent.com/u/26407772?s=460&u=c50b6ddbb95bebaa07bf24e3e1862c4e7891911a&v=4",
      html_url: "https://github.com/codefingas",
    }

  render() {
    const {login, avatar_url, html_url} = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            more
          </a>
        </div>
      </div>
    );
  }
}

export default UsersItem;
