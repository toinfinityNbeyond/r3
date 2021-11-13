import React, {useEffect, useState} from 'react';
import {parse} from "query-string";
import axios from "axios";
import {useHistory} from "react-router-dom";

const pageInfoState = {
    count:0,
    page:1,
    size:10,
    prev:false,
    next:false,
    start:0,
    end:0,
    dtoList:[]
}

const range = (from, to) => {
    const arr = []
    for(let i= from; i <= to; i++){
        arr.push(i)
    }
    return arr
}

//컴포넌트 만들 때 container용 컴포넌트인지 presentation용 컴포넌트인지 고민해야함
const ListComponent = ({location}) => {

    const [pageInfo, setPageInfo] = useState(pageInfoState)
    const [reload, setReload] = useState(false)

    const history = useHistory()

    //console.log(location) //찍어서 값 잘 받아오는지 확인
    const params = parse(location.search) //?page=3 이런거 뽑아오기

    const pageDTO = {page:params.page | 1, size:params.size | 10} //page 값이 없으면 1, size 값이 없으면 10으로 디폴드 값 주기

    console.log(pageDTO)

    useEffect(() => {

        console.log("get json data")
        axios.get(`http://localhost:8080/api/board/list?page=${pageDTO.page}&size=${pageDTO.size}`)
            .then(response => {
                console.log(response.data)
                setPageInfo(response.data)
            })

    },[pageDTO.page, reload])

    const dtoLi = pageInfo.dtoList.map(dto => <li key={dto.bno}>{dto.bno} -- {dto.title} </li>)

    const movePage = (pageNum) => {
        // alert("pageNum: " + pageNum)
        setReload(!reload)
        history.push(`/board/list?page=${pageNum}`)
    }

    const pageLi = range(pageInfo.start, pageInfo.end).map(pageNum =>
        <li key={pageNum} onClick={() => movePage(pageNum)} >{pageNum}</li>)
    // console.log(params) //키:값으로 뽑히는지 로그 확인

    return (
        <div>
            <h1>Board List Component</h1>
            <ul>
                {dtoLi}
            </ul>
            <ul>
                {pageLi}
            </ul>
        </div>
    );
};

export default ListComponent;