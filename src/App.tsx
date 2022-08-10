import { Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';
import RouterController from './Router/Router';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header>
          <nav>
            <Row justify='center'>
              <Col offset={1}>
                <Link to='/'>Country</Link>
              </Col>
              <Col offset={1}>
                <Link to='/search-country'>Search Country</Link>
              </Col>
              <Col offset={1}>
                <Link to='/languages-all'>Languages</Link>
              </Col>
              <Col offset={1}>
                <Link to='/search-language'>Search Language</Link>
              </Col>
            </Row>
          </nav>
        </Header>
        <Content style={{ padding: '20px 50px', minHeight: '100%' }}>
          <RouterController />
        </Content>
        <Footer style={{ textAlign: 'center' }}>About World GQL</Footer>
      </Layout>
    </div>
  );
}

export default App;
