import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import useProducts from '../../hooks/useProducts';
import NewProductPage from './NewProductPage';
import ProductGrid from './ProductGrid';

const ProductsPage = () => {
  const match = useRouteMatch();
  const [products, error] = useProducts();

  return (
    <Switch>
      <Route path={`${match.path}/new`} component={NewProductPage} />
      <Route>
        <Typography component="h2" variant="h3">Products</Typography>
        {error ? <p>{error}</p> : null}
        <ProductGrid products={products} />
      </Route>
    </Switch>
  );
};

export default ProductsPage;
