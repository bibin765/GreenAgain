import React from "react";
import upload from './upload.png';
import Typist from './typist';


class Home extends React.Component{
    render(){
        return(
                <div>
                <div className="inline-block">
                <img src= {upload} className="mainimage" alt="" style={{width:"20rem"}} />
                <div className="inline-block">
                <Typist />
                </div>
                </div>
                
            </div>
        );
    }
}
export default Home;