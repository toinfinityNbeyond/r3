import React from 'react';
import PageTemplate from "../../template/PageTemplate";
import RegisterComponent from "../../components/Board/RegisterComponent";

const BoardRegisterPage = () => {
    return (
        <PageTemplate>
            <h1>Board Register Page</h1>
            <RegisterComponent></RegisterComponent>
        </PageTemplate>
    );
};

export default BoardRegisterPage;