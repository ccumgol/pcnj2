// import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Breadcrumb, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapNavbarComponent from './components/bootstrap-navbar.component';
import BootstrapCarouselComponent from './components/bootstrap-carousel.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <BootstrapNavbarComponent></BootstrapNavbarComponent>
        </div>
        <div className="App">
          <BootstrapCarouselComponent></BootstrapCarouselComponent>
        </div>
      </header>
      <body>
        <Container>
          <Container>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
              <Col xs={6} md={3}>
                <Button variant="primary" size="lg" block className="hotButton">
                  예배 안내
                </Button>
              </Col>
              <Col xs={6} md={3}>
                <Button variant="primary" size="lg" block className="hotButton">
                  설교 말씀
                </Button>
              </Col>
              <Col xs={6} md={3}>
                <Button variant="primary" size="lg" block className="hotButton">
                  아침 묵상
                </Button>
              </Col>
              <Col xs={6} md={3}>
                <Button variant="primary" size="lg" block className="hotButton">
                  최신 주보
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>


        <Container>
          <Breadcrumb>
            <Breadcrumb.Item style={{ fontSize: 16 }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item style={{ fontSize: 16 }}>교회안내</Breadcrumb.Item>
            <Breadcrumb.Item style={{ fontSize: 16 }} active>인사말씀</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">경고 버튼</Alert>
        </Container>

      </body>
    </div>
  );
}

export default App;
