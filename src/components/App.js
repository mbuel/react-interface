import React, { Component } from 'react';
import '../css/App.css';

import AddAppointments from './AddMitzvot';
import SearchMitzvot from './SearchMitzvot';
import ListMitzvot from './ListMitzvot';

import { without } from 'lodash'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mitzvot: [],
      formDisplay: false,
      orderBy: 'Applicable',
      orderDir: 'asc',
      queryText : '',
      lastIndex: 0
    };
    this.deleteMitzvot = this.deleteMitzvot.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addMitzvot = this.addMitzvot.bind(this);
    this.setSort = this.setSort.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  addMitzvot(apt) {
    let tempMitzvot = this.state.mitzvot;
    apt.aptId = this.state.lastIndex;
    tempMitzvot.unshift(apt);
    this.setState({
      mitzvot: tempMitzvot,
      lastIndex: this.state.lastIndex + 1
    })
  }

  deleteMitzvot(apt) {
    let tempMitzvot = this.state.mitzvot;
    tempMitzvot = without(tempMitzvot, apt);
    this.setState({
      mitzvot: tempMitzvot
    });
  }

  setSort(e) {
    let tempSortBy = e.target.value;
    let tempField = e.target.name;
    this.setState({
      [tempField]: tempSortBy
    })
  }

  componentDidMount() {
    fetch('./laws.json')
      .then(response => response.json())
      .then(result => {
        const laws = result.map(item => {
          item.mitzvotID = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 })
          return item;
        });
        console.log(laws);
        this.setState({
          mitzvot: laws
        })
      });


  }

  render() {
    let order;
    let filteredMitzvot = this.state.mitzvot;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredMitzvot = filteredMitzvot.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return(
        eachItem['Receptor']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['Applicable']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['mitzvot']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase())
      )
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addMitzvot={this.addMitzvot} />
                <SearchMitzvot
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  setSort={this.setSort} />
                <ListMitzvot
                  mitzvot={filteredMitzvot}
                  deleteMitzvot={this.deleteMitzvot} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
