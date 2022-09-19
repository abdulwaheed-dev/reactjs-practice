import React from 'react'
import { Button } from 'antd'
import withCounter from './withCounter'

class ClickCounter extends React.Component {

    render(){
        const {count, increament, color, align} = this.props
        return (    
            <div style={{
                backgroundColor: 'hotpink', 
                width: '100%', 
                padding: '20px',
                textAlign:`${align}`
            }}>
                <Button 
                    type="primary" 
                    onClick={increament} 
                    style={{color:`${color}`, 
                }}> 
                    Clicked {count} times 
                </Button>
            </div>
        )
    }    
} 

export default withCounter(ClickCounter)