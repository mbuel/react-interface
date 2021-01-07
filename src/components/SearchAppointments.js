import React, {Component} from 'react';

class SearchAppointments extends Component {
    constructor() {
        super();
        this.state = {
            queryText : ''
        };
        this.queryInput = this.queryInput.bind(this);
    }

    queryInput(e) {
        let tempQuery = e.target.value;
        this.setState({
            queryText : tempQuery
        });
        this.props.setSort(e);
    }

    render() {
        return (
            <div className="search-appointments row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="SearchApts"
                            type="text"
                            className="form-control"
                            aria-label="Search Appointments"
                            name='queryText'
                            value={this.state.queryText}
                            onChange={e => this.queryInput(e)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"

                            >
                                Sort by: <span className="caret" />
                            </button>
    
                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'petName' ? 'active' : '')} 
                                    value="petName"
                                    name='orderBy'
                                    onClick={this.props.setSort}
                                    href="#">
                                    Pet Name
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'aptDate' ? 'active' : '')} 
                                    value='aptDate'
                                    name='orderBy'
                                    onClick={this.props.setSort}
                                    href="#">
                                    Date
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'ownerName' ? 'active' : '')} 
                                    value='ownerName'
                                    name='orderBy'
                                    onClick={this.props.setSort}
                                    href="#">
                                    Owner
                                </button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'asc' ? 'active' : '')} 
                                    value='asc'
                                    name='orderDir'
                                    onClick={this.props.setSort}
                                    href="#">
                                    Asc
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'desc' ? 'active' : '')} 
                                    value='desc'
                                    name='orderDir'
                                    onClick={this.props.setSort}
                                    href="#">
                                    Desc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        );
    }
}

export default SearchAppointments;
