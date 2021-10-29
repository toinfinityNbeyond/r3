import React from 'react';
import PageTemplate from "../template/PageTemplate";
import HelloComponent from "../components/Hello/HelloComponent";

//이 페이지 템플리을 사용
const HelloPage = () => {
    return (
        //여기서 템플릿사용하기 때문에 App.js 가서 HelloPage 사용
        //PageTemplate에 컴포넌트 찔러 넣을 거임 !
        <PageTemplate>
            <HelloComponent></HelloComponent>
        </PageTemplate>
    );
};

export default HelloPage;