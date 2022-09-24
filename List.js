import React, { useState, useEffect, memo } from 'react';
// prop-types if used to check the type of props:
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
   
    <li
      style={{ color: isSelected ? 'green' : 'red' }}
      onClick={onClickHandler}
     >
      {text}
     </li>
   
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex,setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  },[items]);

  const handleClick =(index) => {
    //  console.log(index);
     setSelectedIndex(index);
  };

  return (
    <div>
    <ul style={{ textAlign: 'left' }}>
      <h3>List of items </h3>
      {items.map((item,index) => (
        <SingleListItem
         onClickHandler={(e) => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={index===selectedIndex ? true : false}
        />
      ))}
    </ul>
       </div>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.checkPropTypes(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};


// Sample text added :
WrappedListComponent.defaultProps = {
  items:null
  [
   {
    text:"Here is text 1"
   },
   {
    text:"Here is text 2"
   },
   {
    text:"Here is text 3"
   },
   {
    text:"Here is text 4"
   },
   {
    text:"Here is text 5"
   }

  ]
}

const List = memo(WrappedListComponent);

export default List;

