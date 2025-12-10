import { Link } from 'react-router-dom';
import { Header } from './components/Header/Header';

function App() {



  return (
    <>
    <Header />
    <div className='flex flex-col gap-4 p-4'>
    <Link to="/VocabBuilder/">Главная</Link>
    <Link to="/VocabBuilder/Register">Регистрация</Link>
    <Link to="/VocabBuilder/Login">Вход</Link>
    </div>
    </>
  )
}

export default App
