import React from 'react';

function Button(props) {
  const { handleDelete } = props;
  return (
    <button type="button" onClick={handleDelete}>
      delete
    </button>
  );
}

export default Button;
