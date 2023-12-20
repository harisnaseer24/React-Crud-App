import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import './App.css';
import ProductList from './ProductsList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:<ProductList></ProductList> ,
  },
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  }
  ,{
    path: "/edit/:id",
    element: <UpdateProduct></UpdateProduct>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
