import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../../cs-quiz/src/components/Home/Home'
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Exampage from './components/Exampage/Exampage';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'statistics',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistics></Statistics>
        },
        {
          path: 'exams/:id',
          loader: ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          } ,
          element: <Exampage></Exampage>
        },
        {
          path: 'blogs', element: <Blogs></Blogs>
        }
      ]
    },
    
    
    { path: '*', element: <div className='error'>This Page is Under Construction</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
