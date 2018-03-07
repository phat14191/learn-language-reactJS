import React from 'react';

export function LearnComponent(props) {
    const { inputs, handleChange, addNewWord } = props;
    return (
        <div style={{ padding: 10 }}>
            <div className="learn-wrapper">
              { props.genList() }
              <br />
                <div>
                    <input
                        name="textEn"
                        placeholder="English text"
                        value={inputs.textEn}
                        onChange={handleChange}/>

                    <br /><br />

                    <input
                        name="description"
                        value={inputs.description}
                        onChange={handleChange}
                        placeholder="Vn text"
                    />

                    <br /><br />
                    <button className="btn btn-success" onClick={addNewWord}>Add new word</button>
                </div>
            </div>
        </div>
    )
}
