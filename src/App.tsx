import MainHeader from './Components/header';
import { Layout } from 'antd';
import MainBody from './Components/mainBody';
import CustomFooter from './Components/footer';

const { Footer, Content, Header } = Layout;

const App = (): JSX.Element => {
  return (
    <Layout>
      <Header>
        <MainHeader />
      </Header>
      <Content>
        <MainBody />
      </Content>
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default App;
