import React from 'react';
import PageTemplate from "../template/PageTemplate";
import MainComponent from "../components/Main/MainComponent";
import HelloComponent from "../components/Hello/HelloComponent";

const MainPage = () => {
    return (
        //보여줄 페이지는 무조건 템플릿으로 감싸기
        <PageTemplate>
            <MainComponent></MainComponent>
            <HelloComponent></HelloComponent>
        </PageTemplate>
    );
};

export default MainPage;