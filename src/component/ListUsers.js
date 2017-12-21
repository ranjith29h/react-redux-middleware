import React,{Component} from 'react';

import { connect } from 'react-redux';
import * as actions from '../action';

class ListUsers extends Component {
    

    componentDidMount() {
        this.props.FetchTweetUser();
    }

    renderUser(item){
        return <p key={item.id}>{item.name}</p>
    }

    render() {
        console.log(this.props.tweetUser);
        if(this.props.tweetUser.length > 0) {
            return this.props.tweetUser.map(this.renderUser);
        }
        return (
            <p>Loading........</p>
        );
    }
}

function mapStateToProps(state) {
    return {tweetUser:state.tweetUser};
}

export default connect(mapStateToProps,actions)(ListUsers);