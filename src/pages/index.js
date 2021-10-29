//분기 만들어서 사용
import HelloPage from "./HelloPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./MainPage";
import PortfolioPage from "./PortfolioPage";
import Page404 from "./Page404";

import Board from "./Board";

export default () => {
    return (
        //child 구조
        //<BrowserRouter> //Link 쓰기 위해서 얘 말고 <>빈 태그로 감싸줌 (App.js에서 BrowserRouter 사용)
        <Switch> {/*빈태그에서 <Switch>로 바꿈*/}
            {/*경로가 뭐로 들어오면 뭐를 할거다(switch 구조) -> 실행화면 url에 해당 경로 넣어주면 그 페이지 뜹니당*/}
            <Route path="/hello" component={HelloPage}></Route>
            <Route path="/main" component={MainPage}></Route>
            <Route path="/portfolio" component={PortfolioPage}></Route>

            <Route path="/board" component={Board}></Route> {/*board 기본 경로 list 뜨게*/}

            <Route path="/" component={MainPage} exact={true}></Route> {/*경로 아무 것도 없는 페이지는 기본으로 main 페이지 보여줌*/}
            <Route path="" component={Page404}></Route> {/*잘못된 경로로 들어가면 404페이지 뜨게!*/}
        </Switch>
        //</BrowserRouter>
    )
}