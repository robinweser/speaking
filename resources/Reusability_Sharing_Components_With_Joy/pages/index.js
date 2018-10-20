import React, { Component, Fragment } from "react";

import Loading from "../components/Loading";

const css = `
  * {margin: 0; padding: 0;font-family: -apple-system;box-sizing: border-box}
  div {display:flex;flex-direction:column}
  `;

const data = {
  rofrischmann: [
    { name: "fela", stars: 1500, forks: 150, watchers: 50 },
    { name: "react-controlled-form", stars: 120, forks: 20, watchers: 5 }
  ]
};

const Label = ({ icon, children }) => (
  <div
    style={{
      boxSizing: "border-box",
      marginRight: 10,
      alignItems: "center",
      fontSize: 13
    }}
  >
    <span style={{ fontSize: 20 }}>{icon}</span>
    {children}
  </div>
);

const Repository = ({ name, stars, forks, watchers }) => (
  <div style={{ padding: 10, borderBottom: "1px solid rgb(210, 210, 210)" }}>
    <div style={{ fontSize: 20, fontWeight: "bold" }}>{name}</div>
    <div style={{ paddingTop: 5, flexDirection: "row" }}>
      <Label icon="⭐️">{stars}</Label>
      <Label icon="🍴">{forks}</Label>
      <Label icon="👀">{watchers}</Label>
    </div>
  </div>
);

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      {repositories.map(repository => (
        <Repository {...repository} />
      ))}
    </div>
  );
};

class RepositoryContainer extends Component {
  state = {
    owner: "rofrischmann",
    repositories: [],
    isLoading: false,
    error: undefined
  };

  fetchRepositories = () => {
    this.setState({
      isLoading: true,
      repositories: []
    });

    const { owner } = this.state;

    setTimeout(this.setState.bind(this), 8000, {
      repositories: data[owner],
      isLoading: false
    });
  };

  updateOwner = owner =>
    this.setState({
      owner
    });

  render() {
    return (
      <div>
        <div
          style={{
            padding: 10,
            backgroundColor: "rgb(240, 240, 240)",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <input
            value={this.state.owner}
            onChange={e => this.updateOwner(e.target.value)}
            style={{ padding: "6px 8px", fontSize: 20 }}
          />
          <button
            onClick={this.fetchRepositories}
            style={{
              marginLeft: 10,
              fontSize: 15,
              fontWeight: 700,
              padding: "10px 15px",
              borderRadius: 10,
              apperance: "none",
              border: 0,
              backgroundColor: "rgb(80, 80, 80)",
              textTransform: "uppercase",
              color: "white"
            }}
          >
            fetch
          </button>
        </div>
        {this.state.isLoading ? (
          <div style={{ padding: 10 }}>
            <Loading size={50} />
          </div>
        ) : (
          <RepositoryList repositories={this.state.repositories} />
        )}
      </div>
    );
  }
}

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <RepositoryContainer />
  </div>
);
