import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './tab.css';

class Tab extends Component {
    render () {
        return (
            <div className="tab">
                <Link to='/recommend' className="tab-item">
                    <span className="tab-link">推荐</span>
                </Link>
                <Link to='/singer' className="tab-item">
                    <span className="tab-link">歌手</span>
                </Link>
                <Link to='/rank' className="tab-item">
                    <span className="tab-link">排行</span>
                </Link>
                <Link to='/search' className="tab-item">
                    <span className="tab-link">搜索</span>
                </Link>
            </div>
        )
    }

}
export default Tab;
