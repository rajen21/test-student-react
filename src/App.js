import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateStudentPage from "./containers/create/createStudent";
import ShowStudentsPage from './containers/show/showAllStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-student' element={<CreateStudentPage />} />
        <Route path='/create-student/:id' element={<CreateStudentPage />} />
        <Route path='/' element={<ShowStudentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
