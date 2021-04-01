import React from 'react'
import { renderRoutes } from 'react-router-config';

const About = (props:any) => {
    console.log(props);
    
    return (
        <>
        <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            开发中...
        </div>
        {renderRoutes(props.route.routes)}
        </>
    )
}

export default About
