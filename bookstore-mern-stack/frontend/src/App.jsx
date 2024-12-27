import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';


// const AppRoutes = () => {
//   const routes = useRoutes([
//     { path: '/', element: <Home /> },
//     { path: '/books/create', element: <CreateBooks /> },
//     { path: '/books/edit:id', element: <EditBook /> },
//     { path: '/books/details:id', element: <ShowBook /> },
//     { path: '/books/delete:id', element: <DeleteBook /> }
//   ]);

//   return routes;
// };

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>

    // <div>
    //   <AppRoutes/>
    // </div>
  )
};

export default App
