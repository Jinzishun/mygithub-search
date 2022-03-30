import React,{Component} from "react";
import axios from 'axios'

export default class Search extends Component{
    myRef = React.createRef()

    search =()=>{
        const {updateAppstate} = this.props
        //1.获取用户输入
        let keyword = this.myRef.current.value
        //2.校验数据
        if(keyword.trim() === '') {
            return;
        }
        //3.发请求
        const URL = `https://api.github.com/search/users?q=${keyword}`
        //请求之前更新数据，为了展示Loading
        updateAppstate({
            users:[],
            isFirst:false,
            isLoading:true,
            error:''
        })
        axios.get(URL)
            .then((value)=>{
                //若成功，更新数据
                updateAppstate({
                    users:value.data.items,
                    isFirst:false,
                    isLoading:false,
                    error:''
                })
            })
            .catch((error)=>{
                //若失败，更新数据
                updateAppstate({
                    users:[],
                    isFirst:false,
                    isLoading:false,
                    error:error.message
                })
            })
        

        //4.清空输入
        this.myRef.current.value = ''
        
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="输入你想搜索的用户名" ref={this.myRef}/>&nbsp;
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}