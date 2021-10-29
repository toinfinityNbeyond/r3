import React from 'react';
import PageTemplate from "../../template/PageTemplate";
import {useParams} from "react-router-dom";
import ListComponent from "../../components/Board/ListComponent";

//라우팅안에 라우팅 해줄거임!
const BoardListPage = ({location}) => { //props처럼 location 가져와서 사용 window에 원래 있는 기능

    //커스텀 훅스임
    console.log(location) //값 가져오는지 콘솔 확인 //애네 추출해서 파라미터 뽑아내야함 -> 라이브러리 사용 react query-string 설치

    return (
        <PageTemplate>
            {/*<h1>Board List Page</h1>*/}
            <ListComponent location={location}></ListComponent> {/*location 담아서 ListComponent 가져옴*/}
        </PageTemplate>
    );
};

export default BoardListPage;