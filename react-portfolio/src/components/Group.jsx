import React from 'react';

function Group(){
  const groupStyle = {
    marginRight: '25',
    border: 'solid',
    borderRadius: '5',
    borderColor: '#424242',
    padding: '10',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginLeft: '450',
    marginRight: '450',
    marginTop: '20'
  }
  return (
    <div>
      <div style={groupStyle}>
        <h1>Group Projects</h1>
      </div>
    </div>
    );
  }

  export default Group;
