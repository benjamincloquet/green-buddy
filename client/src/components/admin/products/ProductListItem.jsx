import PropTypes from 'prop-types';

const ProductListItem = ({ product }) => <p>{product.name}</p>;

ProductListItem.propTypes = {
  product: PropTypes.shape(),
};

ProductListItem.defaultProps = {
  product: null,
};

export default ProductListItem;
