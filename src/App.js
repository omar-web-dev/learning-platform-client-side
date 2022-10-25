import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

function App() {
  return (
    <div className="main-router">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
