import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemList />}></Route>
          <Route path='/add' element={<AddItemForm />}></Route>
          <Route path='/edit/:id' element={<EditItemForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
