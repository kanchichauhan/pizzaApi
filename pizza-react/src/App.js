import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage';
import Cart from './components/Cart';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
