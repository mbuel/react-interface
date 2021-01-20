import React, {Component} from 'react';

class SearchMitzvot extends Component {
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
          <div className="search-mitzvot row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchMitzvot"
                  type="text"
                  className="form-control"
                  aria-label="Search Mitzvot"
                  name="queryText"
                  value={this.state.queryText}
                  onChange={(e) => this.queryInput(e)}
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
                    <button
                      className={
                        "sort-by dropdown-item " +
                        (this.props.orderBy === "Receptor" ? "active" : "")
                      }
                      value="Receptor"
                      name="orderBy"
                      onClick={this.props.setSort}
                      href="#"
                    >
                      Receptor
                    </button>
                    <button
                      className={
                        "sort-by dropdown-item " +
                        (this.props.orderBy === "verseLocation" ? "active" : "")
                      }
                      value="VerseLocation"
                      name="orderBy"
                      onClick={this.props.setSort}
                      href="#"
                    >
                      Verse Location
                    </button>
                    <button
                      className={
                        "sort-by dropdown-item " +
                        (this.props.orderBy === "mitzvot" ? "active" : "")
                      }
                      value="mitzvot"
                      name="orderBy"
                      onClick={this.props.setSort}
                      href="#"
                    >
                      Mitzvot
                    </button>
                    <div role="separator" className="dropdown-divider" />
                    <button
                      className={
                        "sort-by dropdown-item " +
                        (this.props.orderDir === "asc" ? "active" : "")
                      }
                      value="asc"
                      name="orderDir"
                      onClick={this.props.setSort}
                      href="#"
                    >
                      Asc
                    </button>
                    <button
                      className={
                        "sort-by dropdown-item " +
                        (this.props.orderDir === "desc" ? "active" : "")
                      }
                      value="desc"
                      name="orderDir"
                      onClick={this.props.setSort}
                      href="#"
                    >
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

export default SearchMitzvot;
