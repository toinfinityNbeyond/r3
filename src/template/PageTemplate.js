import React from 'react';
import Nav from "./Nav";


const PageTemplate = ({children}) => { //예약어 children 추가
    return (
        //래퍼부분 가져오기
        <div id="page-content-wrapper">
            {/*Top navigation*/}
            <Nav></Nav>
            {/*Page content*/}
            <div className="container-fluid">
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;