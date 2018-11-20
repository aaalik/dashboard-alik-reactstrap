import React, { Component } from 'react';
import Header from '../components/lib/header';
import SideBar from '../components/lib/sidebar';
import Dashboard from '../components/dashboard';
import {fetchApi} from '../middlewares/api';

import '../styles/dashboard.css';

class App extends Component {
    constructor(props){
    super(props);
    this.state ={
      data: []
    }
    this.onLoadPage = this.onLoadPage.bind(this);
  }
  
  async onLoadPage(){
    const namadata = await fetchApi("/user/getuser");
    this.setState({
      data: namadata.data
    });
  }
  
  componentDidMount() {
    this.onLoadPage();
  }
  render() {
    return (
        <div >
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <Dashboard 
                        data={this.state.data}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
