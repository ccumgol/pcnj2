import React from "react";

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapNavbarComponent extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="NavBrand">뉴저지장로교회</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="교회안내" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="https://kpcnj.org/about/greeting">담임목사 인사말</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">예배안내</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">섬기는일꾼</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">새가족안내</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">찾아오시는길</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">교회발자취</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">역사자료실</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">일람</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="말씀" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="#action/3.1">설교말씀</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">아침묵상</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">담임목사 설교집</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="교육/기관" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="#action/3.1">교회학교 게시판</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">예배 및 성경공부</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">팰리세이즈팍 교회학교</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">오클랜드 교회학교</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">유스 오케스트라</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">청년부</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">English Ministry</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">ASK School</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">버겐경로대학</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="선교" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="#action/3.1">국내선교</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">해외선교</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">남여 선교회</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="양육" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="#action/3.1">전교우 성경일독</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">일대일 제자양육</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">성경적 재정교육</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">TEE 성경공부</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">커피 브레이크</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">부부행복학교</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">건강한 마음의 회복</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">구역 모임</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="섬김" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="#action/3.1">중보기도</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">문서사역</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">지역문화사역</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">생활체육</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">찬양</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="교회소식" id="basic-nav-dropdown" className="navigation-menu">
                                <NavDropdown.Item href="#action/3.1">주보</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">교회소식</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">교회일정</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">예닮원(소식지)</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">양식 자료실</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">교회 규정</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">교인 업소록</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home" className="navigation-menu">온라인헌금</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    };
}

export default BootstrapNavbarComponent;
