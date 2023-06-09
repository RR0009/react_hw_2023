import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, CommentsPage, UserPage} from "./pages";

function App() {
  return (
    <Routes>

   <Route path={'/'} element={<MainLayout/>}>
     <Route index element={<Navigate to={'users'}/>}/>
     <Route path={'users'} element={<UserPage/>}/>
     <Route path={'comments'} element={<CommentsPage/>}/>
     <Route path={'cars'} element={<CarsPage/>}/>

  </Route>
    </Routes>);
}

export default App;
