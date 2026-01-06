import { Link } from 'react-router-dom';
import { Header } from './src/components/Header/Header';
import authUser from './src/hooks/Auth';

function App() {


authUser()
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
