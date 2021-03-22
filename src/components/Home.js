import React from "react";
import { Card, Divider, Avatar } from 'antd';
import Epl from '../assets/epl.png';
import { Link } from "react-router-dom"
const { Meta } = Card;

export default class Klasemen extends React.Component {
  state = {
    loading: true,
    team: null
  };

  async componentDidMount() {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({ team: responseJson.leagues, loading: false });
  }


  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="main">
        <div className="section">  
    <Card title="Kelompok 6" >
    <Meta
      title="Klasemen Liga"
    />
                <ul style={{marginTop:50, listStyle:'none'}}>
                  <li><Link to={{ pathname: "/leagues/" + this.state.team[0].idLeague}} style={{textDecoration: 'none',color:'black'}}>{this.state.team[0].strLeague}</Link><Divider/></li>
                  <li><Link to={{ pathname: "/leagues/" + this.state.team[3].idLeague}} style={{textDecoration: 'none',color:'black'}}>{this.state.team[3].strLeague}</Link><Divider/></li>
                  <li><Link to={{ pathname: "/leagues/" + this.state.team[4].idLeague}} style={{textDecoration: 'none',color:'black'}}>{this.state.team[4].strLeague}</Link><Divider/></li>
                  <li><Link to={{ pathname: "/leagues/" + this.state.team[5].idLeague}} style={{textDecoration: 'none',color:'black'}}>{this.state.team[5].strLeague}</Link><Divider/></li>
                  <li><Link to={{ pathname: "/leagues/" + this.state.team[6].idLeague}} style={{textDecoration: 'none',color:'black'}}>{this.state.team[6].strLeague}</Link><Divider/></li>
                </ul>
    </Card>
        </div>
      </div>
    );
  }
}