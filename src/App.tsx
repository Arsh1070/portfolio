import MainHeader from './Components/header';
import MainBody from './Components/mainBody';
import CustomFooter from './Components/footer';

const App = (): JSX.Element => {
  return (
    <>
      <MainHeader />
      <MainBody />
      <CustomFooter />
    </>
    /*  <Layout>
      <Header>
        <MainHeader />
      </Header>
      <Content>
        <MainBody />
      </Content>
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout> */
  );
};

export default App;
