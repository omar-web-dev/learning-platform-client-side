import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="main-router">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;