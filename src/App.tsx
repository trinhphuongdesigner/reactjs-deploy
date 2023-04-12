import 'antd/dist/reset.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Categories from './pages/Categories';
import Products from './pages/Products';
import NavigationBar from './components/NavigationBar';

import numeral from 'numeral';
import 'numeral/locales/vi';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  backgroundColor: '#001529',
};

const contentStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#ffffff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

numeral.locale('vi');

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={headerStyle}>
          <NavigationBar />
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path='/categories' element={<Categories />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
