import React from "react";
import { Card, Col, Row } from "react-materialize";
import Input from "react-materialize/lib/Input";
import Icon from "react-materialize/lib/Icon";
import Button from "react-materialize/lib/Button";

export class LoginBox extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <Col>
                            <Card className='white lighten-2' textClassName='' title='Login Form'>
                                <Row>
                                    <form method="post" action="/done">
                                        <Input s={12} label="Username" validate required="true"><Icon>account_circle</Icon></Input>
                                        <Input s={12} label="Password" validate type='password' required="true"><Icon>create</Icon></Input>
                                        <div className="col offset-s4">
                                            <Button type="submit" s={12}>Login</Button>
                                        </div>
                                    </form>
                                </Row>
                            </Card>
                        </Col>
                    </div></div>
            </div>
        );
    }
}