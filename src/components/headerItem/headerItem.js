import React from 'react';
import './headerItem.less';
import {Link} from 'react-router';
class HeaderItem extends React.Component{
    constructor(){
        super(...arguments)
    }
    linkHandler(e){
        console.log(e)
    }
    render(){
        const data = this.props.data;
        //const className = data.selected ? "header-item selected" : "header-item";
        return(
            <Link activeClassName="selected" className="header-item" to={data.url} onClick={this.linkHandler} onlyActiveOnIndex={true}>
                {data.text}
            </Link>
        )
    }
}

HeaderItem.defaultProps = {
    text:"默认样式",
    url:"/home"
};
export default HeaderItem;
