import React from 'react';
import { goto } from 'Utils/appFunc';
export default class Home extends React.Component {
    gotoPage = () => {
        goto('detail')
    }
    gotoPageFunc = () => {
        goto('https://baidu.com', 2);
    }
    render() {
        return (
            <div>
                <div onClick = {this.gotoPage}>小超官网</div>
                <div onClick = {this.gotoPageFunc}>local</div>
            </div>
        )
    }
}