/* eslint-disable react/jsx-key */
import React, {Component} from 'react';
import { MdDeleteForever } from 'react-icons/md'

class ListMitzvot extends Component {

    render() {
        console.log(this.props.mitzvot);
        return (
            <div className="mitzvot-list item-list mb-3">
            {this.props.mitzvot.map( item => (
                <div className="mitzvot-item col media py-3" key={item.mitzvotID}>
                <div className="mr-3">
                    <button className="mitzvot-delete btn btn-sm btn-danger"
                        onClick={() => this.props.deleteMitzvot(item)}
                    ><MdDeleteForever /></button>
                </div>
    
                <div className="mitzvot-info media-body">
                    <div className="mitzvot-head d-flex">
                        <span 
                            className="mitzvot-receptor"
                            >{item.Receptor}</span>
                        <span className="mitzvot-date ml-auto">
                            <div className="mitzvot-notes">{item.VerseLocation}</div>
                        </span>
                    </div>
    
                    <div className="owner-name">
                        <span className="label-item">Applicable: </span>
                        <span>{item.Applicable}</span>
                    </div>
                    <div className="mitzvot-notes">{item.command}</div>
                </div>
                </div>
            ))}

        </div>
  
        );
    }
}

export default ListMitzvot;
