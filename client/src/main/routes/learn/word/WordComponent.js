import React from 'react';
import { connect } from 'react-redux';
import { deleteWord } from '../../../../redux/actions/index';
import "./word.css";

function WordComponent(props) {
    const { textEn, description, _id } = props.word;
    const { isUpdating, handleChange, inputs, deleteWord, toggleUpdating, updateWord } = props;
    return (
        <div className="word-wrap">
              <div style={{ display: isUpdating ? 'block' : 'none' }}>
                  <input
                      name="textEn"
                      onChange={handleChange}
                      value={inputs.textEn} />
                  <br />
                  <input
                      name="description"
                      onChange={handleChange}
                      value={inputs.description}/>
                  <br />
                  <button className="btn btn-success" onClick={updateWord}>Confirm</button>
                  <button className="btn btn-default" onClick={toggleUpdating}>Cancel</button>
              </div>
              <div className="flip-container" style={{ display: isUpdating ? 'none' : 'block' }}>
                  <div className="flipper">
                        <div className="front card">
                            <h1>{textEn}(English)</h1>
                        </div>
                        <div className="back card">
                            <h1>{description}(Vietnamese)</h1>
                        </div>
                  </div>

              </div>
              <button className="btn btn-danger" onClick={() => deleteWord(_id)}>Remove</button>
              <button className="btn btn-primary" onClick={toggleUpdating}>Update</button>
          </div>

    );
}

export default connect(null, { deleteWord })(WordComponent)
