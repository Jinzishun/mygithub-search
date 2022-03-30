import React,{Component} from "react";
import Item from '../item/index';
import './index.css'

export default class List extends Component{

    constructor(props){
        super(props);
        this.state = {auth:true};
    }
    
    render(){
        const {users,isFirst,isLoading,error} = this.props

        if(isFirst){
            return <h2>输入关键字以搜索</h2>
        }else if(isLoading){
            return <h2>loading...</h2>
        }else if(error){
            return <h2>{error}</h2>
        }else{
            return (
                <div className="row">
                    {
                        users.length === 0 ? '搜索用户不存在' :( this.state.auth ?
                        users.map((item)=>{
                            return <Item key={item.login}  {...item}/>
                        }):'你没权限') 

                        
                    }
                </div>
            )
        }
        
     
    }
}