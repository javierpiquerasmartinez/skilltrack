import Header from './components/Header.tsx'
import './App.css'
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { SearchPage } from './pages/SearchPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

function App() {

  const currentPath = window.location.pathname;
  let page = <NotFoundPage></NotFoundPage>;

  if (currentPath === '/') {
    page = <HomePage></HomePage>
  } else if (currentPath === '/search') {
    page = <SearchPage></SearchPage>
  }

  return (
    <>
      <Header></Header>
      {page}
    </>
  )
}

export default App
