import React from "react";
import { Card, Divider } from 'antd';


export default class Klasemen extends React.Component {
  state = {
    loading: true,
    team: null
  };

  async componentDidMount() {
    const url = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021";
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({ team: responseJson.table, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="main">
        <div className="section">  
    <Card title="Klasemen Liga Inggris">
    <table>
            <tr>
              <th style={{width:50}}>Pos</th>
              <th style={{width:80}}>Logo</th>
              <th style={{width:130}}>Team Name</th>
              <th style={{width:100}}>Win</th>
              <th style={{width:100}}>Draw</th>
              <th style={{width:100}}>Lose</th>
              <th style={{width:100}}>Points</th>
              <th style={{width:150}}>Last 5 Matches</th>
            </tr>
          </table>
          <Divider />
          {this.state.team.map((rank, index)=>{
            return <table>
                <tr>
                  <td style={{width:50}}>{rank.intRank}<Divider/></td>
                  <td style={{width:80}}><img src={rank.strTeamBadge} alt="Logo" style={{width:20, height:20}}/><Divider/></td>
                  <td style={{width:130}}>{rank.strTeam}<Divider/></td>
                  <td style={{width:100}}>{rank.intWin}<Divider/></td>
                  <td style={{width:100}}>{rank.intDraw}<Divider/></td>
                  <td style={{width:100}}>{rank.intLoss}<Divider/></td>
                  <td style={{width:100}}>{rank.intPoints}<Divider/></td>
                  <td style={{width:150}}>{rank.strForm}<Divider/></td>
                </tr>
            </table>
             })} 
    </Card>
        </div>
      </div>
    );
  }
}