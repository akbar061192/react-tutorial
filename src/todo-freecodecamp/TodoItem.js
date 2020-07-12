import React from 'react';

const TodoItem = (props) => {
  const { id, text, completed } = props.item;
  const { handleChange } = props;
  return (
    <div style={{ margin: ' 5rem auto', width: '300px' }}>
      <input
        type='checkbox'
        name='check'
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <span>{text}</span>
      <hr />
    </div>
  );
};

export default TodoItem;
