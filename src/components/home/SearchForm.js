import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../../actions/searchActions';

class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }


    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-2">
                <div className="container">
                    <h1 className="display-4 mb-2">
                        {/* <i className="fa fa-search">Search for movie, TV series ....</i> */}
                        Search Movies
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input type="text"
                            className="form-control"
                            name="searchForm"
                            onChange={this.onChange}

                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-4 ">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
});

export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm);
