import logo from './logo.svg';
import './App.css';
import Sidebar from "./template/Sidebar";
import Nav from "./template/Nav";
import PageTemplate from "./template/PageTemplate";
import HelloPage from "./pages/HelloPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";

import Pages from './pages'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      //빈태그에서 BrowerRouter로 바꿔서 싸줬어용
      <BrowserRouter>
          <Sidebar></Sidebar>
          {/*<Nav></Nav> //얘 못써요 의미없음*/}
          {/*<PageTemplate></PageTemplate> 이거까지하면 우리가 보는 기본 페이지 템플릿 완.*/}
          {/*<HelloPage></HelloPage>*/}
          {/*<MainPage></MainPage>*/}
          {/*<PortfolioPage></PortfolioPage>*/}
          <Pages></Pages>
      </BrowserRouter>
  );
}

export default App;
