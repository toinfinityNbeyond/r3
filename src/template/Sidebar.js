import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        // 사이드바 컴포넌트 추가 (atomic 디자인이랑 비슷한 방식)
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                {/* <a> 태그 쓸수 없는 이유 -> a 태그는 새로운 페이지를 띄워주는 애. 우리는 SPA 사용 링크 띄워줘야함 */}
                {/*<a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>*/}
                {/* a -> Link, href -> to로 바꿔서 경로지정 */}
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/hello">Hello</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/main">Main</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/portfolio">Portfolio</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/board/list">Board</Link>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
            </div>
        </div>
    );
};

export default Sidebar;