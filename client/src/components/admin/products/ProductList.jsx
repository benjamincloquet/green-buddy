import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
  const renderList = () => {
    if (!products) {
      return null;
    }
    return products.map((product) => <ProductListItem product={product} />);
  };

  return <div className="product-list">{renderList()}</div>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

ProductList.defaultProps = {
  products: null,
};

export default ProductList;
