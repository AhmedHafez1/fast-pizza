import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'menu',
    element: <Menu />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'order/new',
    element: <CreateOrder />,
  },
  {
    path: 'order/:orderId',
    element: <Order />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
