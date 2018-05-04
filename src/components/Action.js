import React from 'react';

const Action = props => (
  <div>
    <button 
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      You don\'t know what to do?
    </button>
  </div>
);

export default Action;
