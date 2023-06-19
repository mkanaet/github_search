import React, { Component } from "react";
import PropTypes from "prop-types";

class RepositoryList extends Component {
  render() {
    const repos = this.props.repoData.map((repo, id) => {
      return repo.name;
    });
    //console.log(repos);

    return (
      <ul className="list">
        {repos.map((name, id) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    );
  }
}

RepositoryList.propTypes = {
  repoData: PropTypes.array,
};

export default RepositoryList;
