import React from "react";

export default class Klasemen extends React.Component {
  state = {
    loading: true,
    place: null,
    team: null,
    wins: null,
    loses: null,
    draws: null,
    poins: null
  };

  async componentDidMount() {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021";
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let teamName = [];
        let places = [];
        let wins = [];
        let draws = [];
        let loses = [];
        let poins = [];
        let strForm = [];

        for (var i = 0; i < data.table.length; i++) {
          places.push(data.table[i].intRank + "\n");
          teamName.push(data.table[i].strTeam + "\n");
          wins.push(data.table[i].intWin + "\n");
          draws.push(data.table[i].intDraw + "\n");
          loses.push(data.table[i].intLoss + "\n");
          poins.push(data.table[i].intPoints + "\n");
          strForm.push(data.table[i].strForm + "\n");
        }

        this.setState({
          place: places,
          team: teamName,
          wins: wins,
          loses: loses,
          draws : draws,
          poins : poins,
          strForm: strForm,
          loading: false
        });
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
      <div className="main">
        <div className="section">
          <table>
            <tr>
              <th>Place</th>
              <th>Team Name</th>
              <th>Win</th>
              <th>Lose</th>
              <th>Draw</th>
              <th>Poins</th>
              <th>Last 5 Matches</th>
            </tr>
            <tr>
              <td>{this.state.place[0]}</td>
              <td>{this.state.team[0]}</td>
              <td>{this.state.wins[0]}</td>
              <td>{this.state.loses[0]}</td>
              <td>{this.state.draws[0]}</td>
              <td>{this.state.poins[0]}</td>
              <td>{this.state.strForm[0]}</td>
            </tr>
            <tr>
              <td>{this.state.place[1]}</td>
              <td>{this.state.team[1]}</td>
              <td>{this.state.wins[1]}</td>
              <td>{this.state.loses[1]}</td>
              <td>{this.state.draws[1]}</td>
              <td>{this.state.poins[1]}</td>
              <td>{this.state.strForm[1]}</td>
            </tr>
            <tr>
              <td>{this.state.place[2]}</td>
              <td>{this.state.team[2]}</td>
              <td>{this.state.wins[2]}</td>
              <td>{this.state.loses[2]}</td>
              <td>{this.state.draws[2]}</td>
              <td>{this.state.poins[2]}</td>
              <td>{this.state.strForm[2]}</td>
            </tr>
            <tr>
              <td>{this.state.place[3]}</td>
              <td>{this.state.team[3]}</td>
              <td>{this.state.wins[3]}</td>
              <td>{this.state.loses[3]}</td>
              <td>{this.state.draws[3]}</td>
              <td>{this.state.poins[3]}</td>
              <td>{this.state.strForm[3]}</td>
            </tr>
            <tr>
              <td>{this.state.place[4]}</td>
              <td>{this.state.team[4]}</td>
              <td>{this.state.wins[4]}</td>
              <td>{this.state.loses[4]}</td>
              <td>{this.state.draws[4]}</td>
              <td>{this.state.poins[4]}</td>
              <td>{this.state.strForm[4]}</td>
            </tr>
            <tr>
              <td>{this.state.place[5]}</td>
              <td>{this.state.team[5]}</td>
              <td>{this.state.wins[5]}</td>
              <td>{this.state.loses[5]}</td>
              <td>{this.state.draws[5]}</td>
              <td>{this.state.poins[5]}</td>
              <td>{this.state.strForm[5]}</td>
            </tr>
            <tr>
              <td>{this.state.place[6]}</td>
              <td>{this.state.team[6]}</td>
              <td>{this.state.wins[6]}</td>
              <td>{this.state.loses[6]}</td>
              <td>{this.state.draws[6]}</td>
              <td>{this.state.poins[6]}</td>
              <td>{this.state.strForm[6]}</td>
            </tr>
            <tr>
              <td>{this.state.place[7]}</td>
              <td>{this.state.team[7]}</td>
              <td>{this.state.wins[7]}</td>
              <td>{this.state.loses[7]}</td>
              <td>{this.state.draws[7]}</td>
              <td>{this.state.poins[7]}</td>
              <td>{this.state.strForm[7]}</td>
            </tr>
            <tr>
              <td>{this.state.place[8]}</td>
              <td>{this.state.team[8]}</td>
              <td>{this.state.wins[8]}</td>
              <td>{this.state.loses[8]}</td>
              <td>{this.state.draws[8]}</td>
              <td>{this.state.poins[8]}</td>
              <td>{this.state.strForm[8]}</td>
            </tr>
            <tr>
              <td>{this.state.place[9]}</td>
              <td>{this.state.team[9]}</td>
              <td>{this.state.wins[9]}</td>
              <td>{this.state.loses[9]}</td>
              <td>{this.state.draws[9]}</td>
              <td>{this.state.poins[9]}</td>
              <td>{this.state.strForm[9]}</td>
            </tr>
            <tr>
              <td>{this.state.place[10]}</td>
              <td>{this.state.team[10]}</td>
              <td>{this.state.wins[10]}</td>
              <td>{this.state.loses[10]}</td>
              <td>{this.state.draws[10]}</td>
              <td>{this.state.poins[10]}</td>
              <td>{this.state.strForm[10]}</td>
            </tr>
            <tr>
              <td>{this.state.place[11]}</td>
              <td>{this.state.team[11]}</td>
              <td>{this.state.wins[11]}</td>
              <td>{this.state.loses[11]}</td>
              <td>{this.state.draws[11]}</td>
              <td>{this.state.poins[11]}</td>
              <td>{this.state.strForm[11]}</td>
            </tr>
            <tr>
              <td>{this.state.place[12]}</td>
              <td>{this.state.team[12]}</td>
              <td>{this.state.wins[12]}</td>
              <td>{this.state.loses[12]}</td>
              <td>{this.state.draws[12]}</td>
              <td>{this.state.poins[12]}</td>
              <td>{this.state.strForm[12]}</td>
            </tr>
            <tr>
              <td>{this.state.place[13]}</td>
              <td>{this.state.team[13]}</td>
              <td>{this.state.wins[13]}</td>
              <td>{this.state.loses[13]}</td>
              <td>{this.state.draws[13]}</td>
              <td>{this.state.poins[13]}</td>
              <td>{this.state.strForm[13]}</td>
            </tr>
            <tr>
              <td>{this.state.place[14]}</td>
              <td>{this.state.team[14]}</td>
              <td>{this.state.wins[14]}</td>
              <td>{this.state.loses[14]}</td>
              <td>{this.state.draws[14]}</td>
              <td>{this.state.poins[14]}</td>
              <td>{this.state.strForm[14]}</td>
            </tr>
            <tr>
              <td>{this.state.place[15]}</td>
              <td>{this.state.team[15]}</td>
              <td>{this.state.wins[15]}</td>
              <td>{this.state.loses[15]}</td>
              <td>{this.state.draws[15]}</td>
              <td>{this.state.poins[15]}</td>
              <td>{this.state.strForm[15]}</td>
            </tr>
            <tr>
              <td>{this.state.place[16]}</td>
              <td>{this.state.team[16]}</td>
              <td>{this.state.wins[16]}</td>
              <td>{this.state.loses[16]}</td>
              <td>{this.state.draws[16]}</td>
              <td>{this.state.poins[16]}</td>
              <td>{this.state.strForm[16]}</td>
            </tr>
            <tr>
              <td>{this.state.place[17]}</td>
              <td>{this.state.team[17]}</td>
              <td>{this.state.wins[17]}</td>
              <td>{this.state.loses[17]}</td>
              <td>{this.state.draws[17]}</td>
              <td>{this.state.poins[17]}</td>
              <td>{this.state.strForm[17]}</td>
            </tr>
            <tr>
              <td>{this.state.place[18]}</td>
              <td>{this.state.team[18]}</td>
              <td>{this.state.wins[18]}</td>
              <td>{this.state.loses[18]}</td>
              <td>{this.state.draws[18]}</td>
              <td>{this.state.poins[18]}</td>
              <td>{this.state.strForm[18]}</td>
            </tr>
            <tr>
              <td>{this.state.place[19]}</td>
              <td>{this.state.team[19]}</td>
              <td>{this.state.wins[19]}</td>
              <td>{this.state.loses[19]}</td>
              <td>{this.state.draws[19]}</td>
              <td>{this.state.poins[19]}</td>
              <td>{this.state.strForm[19]}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}