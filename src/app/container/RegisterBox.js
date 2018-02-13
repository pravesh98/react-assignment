import React from "react";
import { Card, Col, Row } from "react-materialize";
import Input from "react-materialize/lib/Input";
import Icon from "react-materialize/lib/Icon";
import Button from "react-materialize/lib/Button";
import { ProgressBar } from "../component/ProgressBar";
import { Header } from "./Header";

export const divStyle = {
    backgroundColor: 'red',
    height: '10px',
    marginTop: '10px',
    marginBottom: '10px'
};


export class RegisterBox extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                            <Col>
                                <Card className='white lighten-2' textClassName='' title='Register Form'>
                                    <Row>
                                        <form method="post" action="/done">
                                            <Input s={12} label="Username" validate required="true"><Icon>account_circle</Icon></Input>
                                            <Input s={12} label="Password" validate type='password' error="suu" required="true"><Icon>create</Icon></Input>

                                            <div className="col offset-s4">
                                                <Button type="submit" s={12}>Login</Button>
                                            </div>
                                        </form>
                                    </Row>
                                </Card>
                            </Col>
                        </div></div>
                </div>
            </div>
        );
    }
}