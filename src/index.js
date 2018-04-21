import React from 'react';
import pt from 'prop-types';

const List = ({ iterator, of: Component, isobject, ...props }) => {
  if (iterator && Component) {
    if (isobject) {
      const keys = Object.keys(iterator);
      return keys.map(key => (
        <Component key={key} item={iterator[key]} {...props} />
      ));
    } else {
      return iterator.map((item, key) => (
        <Component key={key} item={item} {...props} />
      ));
    }
  } else {
    return 'nr-react-list Component require an "iterator" and "of" props';
  }
};
List.propTypes = {
  iterator: pt.oneOfType([pt.array, pt.object]).isRequired,
  of: pt.any.isRequired,
  isobject: pt.bool
};
List.defaultProps = {
  isobject: false
};

export default List;
