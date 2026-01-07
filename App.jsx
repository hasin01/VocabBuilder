import { Link } from "react-router-dom";
import { Header } from "./src/components/Header/Header";


function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-4">
        <Link to="/VocabBuilder/">Главная</Link>
        <Link to="/VocabBuilder/Dictionary">Dictionary</Link>
        <Link to="/VocabBuilder/register">register</Link>
        <Link to="/VocabBuilder/login">login</Link>



      </div>
    </>
  );
}

export default App;
