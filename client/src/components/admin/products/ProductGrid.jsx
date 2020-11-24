import PropTypes from 'prop-types';
import { makeStyles, Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'options',
    width: 90,
    headerName: 'Options',
    sortable: false,
    renderCell: () => (
      <Button>Edit</Button>),
  },
];

const useStyles = makeStyles((theme) => ({
  dataGrid: {
    width: '100%',
    height: '70vh',
    marginBottom: theme.spacing(2),
  },
}));

const ProductGrid = ({ products }) => {
  if (!products) {
    return null;
  }

  const classes = useStyles();

  return (
    <>
      <div className={classes.dataGrid}>
        <DataGrid
          rows={products}
          columns={columns}
          checkboxSelection
        />
      </div>
      <Button variant="contained">New Product</Button>
    </>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

ProductGrid.defaultProps = {
  products: null,
};

export default ProductGrid;
