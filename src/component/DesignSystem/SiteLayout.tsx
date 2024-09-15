import { Img } from "@component/DesignSystem/Img";
import { Col, Layout, Menu, Row, Typography } from "antd";
import type { MenuProps } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

interface Props {
  children: ReactNode
}

const { Header, Content, Footer } = Layout;
const { Link } = Typography

const items: MenuItem[] = [
  {
    label: 'Home',
    key: '/',
  }, {
    label: 'Login',
    key: '/login',
  }, {
    label: 'Signup',
    key: '/signup',
  }, {
    label: 'Payouts',
    key: '/payouts',
  }, {
    label: 'Contact',
    key: '/contact',
  }, {
    label: 'FAQ',
    key: '/faq',
  }
]

export const SiteLayout: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  };

  const onGetCurrentTime = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes()

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;

    const formattedToday = yyyy + '/' + mm + '/' + dd + ' ' + h + ':' + m;
    return formattedToday
  }

  return (
    <Layout>
      <Header className="header">
        <Link className="header-logo">
          <Img src="/logo.png" />
        </Link>
        <Menu
          onClick={onClick}
          className="header-menu"
          mode="horizontal"
          items={items}
          overflowedIndicator={<MenuOutlined style={{ fontSize: 24, color: '#fff' }} />}
        />
      </Header>
      <Content>
        {children}
      </Content>
      <Footer className="footer">
        <div className="footer-top">
          <div className="container">
            <Row gutter={[16, 48]}>
              <Col md={{ span: 6 }} xs={{ span: 12 }}>
                <div className="footer-top-item">
                  <h3>Account</h3>
                  <div className="link">
                    <Link>Deposit</Link>
                    <Link>Withdraw</Link>
                    <Link>Settings</Link>
                    <Link>Logout</Link>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 6 }} xs={{ span: 12 }}>
                <div className="footer-top-item">
                  <h3>Support</h3>
                  <div className="link">
                    <Link>FAQ</Link>
                    <Link>Contact</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Service</Link>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 6 }} xs={{ span: 12 }}>
                <div className="footer-top-item">
                  <h3>Earn BNB</h3>
                  <div className="link">
                    <Link>Multiply BNB</Link>
                    <Link>Faucet</Link>
                    <Link>Affiliates</Link>
                    <Link>Gifts</Link>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 6 }} xs={{ span: 12 }}>
                <div className="footer-top-item">
                  <h3>Our websites:</h3>
                  <div className="link">
                    <Link>Litepick.io</Link>
                    <Link>Tronpick.io</Link>
                    <Link>Dogepick.io</Link>
                    <Link>Solpick.io</Link>
                    <Link className="active">BNBpick.io</Link>
                    <Link>Maticpick.io</Link>
                    <Link>Tonpick.game</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bot">
          <span>Server time: {onGetCurrentTime()}</span>
          <strong>Copyright ©2023 All rights reserved | Bnbpick.io</strong>
        </div>
      </Footer>
    </Layout>
  );
}