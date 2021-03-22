import React from "react";
import { Card, Divider, Avatar, Row, Col } from 'antd';

export default class Klasemen extends React.Component {
  state = {
    loading: true,
    team: null
  };

  
  async componentDidMount() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='+this.props.match.params.idTeam;
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({ team: responseJson.teams, loading: false });
  }

  
  render() { 
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="main">
        <div className="section-team">  
    <Card cover={<img src={this.state.team[0].strTeamBanner} alt="banner"/>}>
        <Row style={{marginTop:50}}>
            <Col span={12}>
                <img src={this.state.team[0].strTeamBadge} style={{width:200, height:200}} alt="logo"/>
            </Col>
            <Col span={12} >
                <p style={{fontSize:30}}>{this.state.team[0].strTeam}
                </p>
                <p style={{fontSize:20, color:'grey'}}>
                {this.state.team[0].intFormedYear}
                </p>
                {this.state.team[0].strDescriptionEN}
            </Col>
        </Row>
    </Card>
        </div>
      </div>
    );
  }
}