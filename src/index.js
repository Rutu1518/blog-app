
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import Blogview from './views/Blogview/Blogview';




const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>

  },
  {
    path:"/blog/:id",
    element:<Blogview/>

  }
])

root.render(<RouterProvider router={router}/>);

