import React from "react";

export default class Klasemen extends React.Component {
  state = {
    loading: true,
    team: null
  };

  async componentDidMount() {
    const url = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4332&s=2020-2021";
    await fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let teamName = []
        for (var i = 0; i < data.table.length; i++) {
            teamName.push(data.table[i].strTeam + '\n')
        }

        this.setState({
            team: teamName, loading: false
        })
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.team) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.team}</div>
      </div>
    );
  }
}