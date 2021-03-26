import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa';

class AddAppointments extends Component {
    
    constructor() {
        super();
        this.state = {
          Receptor : '',
          Applicable : '',
          VerseLocation : '',
          mitzvot : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    resetForm() {
        this.setState({
          Receptor : '',
          Applicable : '',
          VerseLocation : '',
          mitzvot : ''
        });

        this.props.toggleForm();
    }

    handleAdd(e) {
        e.preventDefault();
        let tempMitzvot = {
          Receptor: this.state.Receptor,
          Applicable: this.state.Applicable,
          VerseLocation: this.state.VerseLocation,
          mitzvot: this.state.mitzvot
        }

        this.props.addMitzvot(tempMitzvot);

        this.resetForm();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name] : value
        });
    }

    render() {

        return (
            <div className={
                "card textcenter mt-3" + 
                (this.props.formDisplay ? '' : ' add-mitzvot')
            }>
                <div 
                    className="mitzvot-heading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}>
                    <FaPlus /> Add Mitzvot
                </div>
  
                <div className="card-body">
                    <form id="aptForm" noValidate 
                        onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="Receptor"
                    readOnly
                  >
                    Receptor
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="Receptor"
                      placeholder="Receptor of Mitzvot?"
                      value={this.state.Receptor}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                        <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="Applicable"
                  >
                    Applicable
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="Applicable"
                      placeholder="Mitzvot Applicable to?"
                      value={this.state.Applicable}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="VerseLocation"
                  >
                    Verse Location
                  </label>
                  <div className="col-md-10 col-form-label text-md-right">
                    <input
                      type="text"
                      className="form-control"
                      name="VerseLocation"
                      id="VerseLocation"
                      placeholder="Exodus 23:2"
                      value={this.state.VerseLocation}
                      onChange={this.handleChange}
                    />
                  </div>

                </div>
  
                        <div className="form-group form-row">
                  <label className="col-md-2 text-md-right" htmlFor="mitzvot">
                    mitzvot
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      rows="4"
                      cols="50"
                      name="mitzvot"
                      id="mitzvot"
                      placeholder="mitzvot Notes"
                      value={this.state.mitzvot}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
  
                        <div className="form-group form-row mb-0">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary d-block ml-auto"
                    >
                      Add Mitzvot
                    </button>
                  </div>
                </div>
                    </form>
                </div>
            </div>
  
        );
    }
}

export default AddAppointments;
