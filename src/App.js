import React,{Component} from "react";
import './components/list/index'
import List from "./components/list/index";
import './components/search/index'
import Search from "./components/search/index";

export default class App extends Component{
    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        error:''
    }

    updateAppstate = (obj)=>{
        this.setState(obj)
    }

    render(){
        return(
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search updateAppstate={this.updateAppstate} />
                </section>
                    <List {...this.state}/>
                
            </div>
        )
    }
}