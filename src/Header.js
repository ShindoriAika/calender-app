import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.year}年 {this.props.month}月</h1>
            </div>
        )
    }
}

export default Header