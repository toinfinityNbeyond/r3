//인덱스 만드는 잉 -> 컴포넌트 많을 때 구분이 쉽기 위해서
import {Route, Switch} from "react-router-dom";
import BoardListPage from "./BoardListPage";

export default () => {
    return (
        <Switch>
            <Route path={"/board/list"} component={BoardListPage}></Route>
            {/* /board로 들어오면 무조건 리스트 떠야함 -> 밖에 전체 index.js에도 코드 추가 */}
            <Route path={"/board/"} component={BoardListPage}></Route>
        </Switch>
    )
}