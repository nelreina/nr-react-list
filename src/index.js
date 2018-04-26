import React from 'react';
import pt from 'prop-types';
import { isObject, assign } from 'lodash';

const List = ({ iterator, of: Component, propname, ...rest }) => {
  if (iterator && Component) {
    if (isObject(iterator)) {
      const keys = Object.keys(iterator);
      return keys.map(key => {
        const props = assign({}, rest, { [propname]: iterator[key] });
        return <Component key={key} {...props} />;
      });
    } else {
      return iterator.map((item, key) => {
        const props = assign({}, rest, { [propname]: item });
        return <Component key={key} {...props} />;
      });
    }
  } else {
    return 'nr-react-list Component require an "iterator" and "of" props';
  }
};
List.propTypes = {
  iterator: pt.oneOfType([pt.array, pt.object]).isRequired,
  of: pt.any.isRequired,
  propname: pt.string
};
List.defaultProps = {
  propname: 'item'
};

export default List;
