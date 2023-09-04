import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NewPage from './components/NewPage';
import RootLayput from './components/RootLayput';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayput />}>
        <Route path='todo' element={<Todos />} />
        <Route path='test' element={<NewPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;

  // return (
  //   <div className="App">
  //     <Route>
  //       <AddTodo path="/test" />
  //       <Todos />
  //     </Route>
  //   </div>
  // );
}

export default App;
