import React, { Component } from 'react';
// import AddModal from './AddModal';
import ListUsers from './ListUsers';
// import SearchForm from './SearchForm';


class Home extends Component {

    render() {
        return (
            <div className="container">
                {/*<SearchForm />*/}
                <ListUsers />
                {/*<AddModal />*/}
            </div>
        );
    }
}

export default Home
