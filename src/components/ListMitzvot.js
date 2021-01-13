/* eslint-disable react/jsx-key */
import React, {Component} from 'react';
import { MdDeleteForever } from 'react-icons/md'

class ListMitzvot extends Component {

    render() {
        console.log(this.props.mitzvot);
        return (
            <div className="appointment-list item-list mb-3">
            {this.props.mitzvot.map( item => (
                <div className="pet-item col media py-3" key={item.mitzvotID}>
                <div className="mr-3">
                    <button className="pet-delete btn btn-sm btn-danger"
                        onClick={() => this.props.deleteMitzvot(item)}
                    ><MdDeleteForever /></button>
                </div>
    
                <div className="pet-info media-body">
                    <div className="pet-head d-flex">
                        <span 
                            className="pet-name"
                            >{item.Receptor}</span>
                        <span className="pet-date ml-auto">
                            <div className="apt-notes">{item.VerseLocation}</div>
                        </span>
                    </div>
    
                    <div className="owner-name">
                        <span className="label-item">Applicable: </span>
                        <span>{item.Applicable}</span>
                    </div>
                    <div className="apt-notes">{item.mitzvot}</div>
                </div>
                </div>
            ))}

        </div>
  
        );
    }
}

export default ListMitzvot;
