import { Btn } from "@component/DesignSystem/Btn";
import { Icon } from "@component/DesignSystem/Icon";
import { Img } from "@component/DesignSystem/Img";
import { Section } from "@component/DesignSystem/Section";
import { SiteLayout } from "@component/DesignSystem/SiteLayout";
import { Card, Col, Collapse, Input, Row, Typography } from "antd";
import type { CollapseProps } from 'antd';
import { FC } from "react";


interface FeaProps {
  icon: string
  title: string
  content: string
}

interface SumProps {
  icon: string
  number: string
  caption: string
}

const { Link } = Typography

const featuresItems: FeaProps[] = [
  {
    icon: '/fea-1.svg',
    title: 'FREE BNB EVERY HOUR',
    content: 'You are able solve captchas in order to accrue up to 0.02 BNB for free every hours.'
  }, {
    icon: '/fea-2.svg',
    title: 'PROVABLY FAIR GAMES',
    content: 'Enjoy the complete BNB mutuel betting and casino experience at Bnbpick.io! Players have the opportunity to earn more BNB through the exciting games. Every game uses provably technology to prevent fraud and ensure fairness.'
  }, {
    icon: '/fea-3.svg',
    title: 'SAFE & SECURE',
    content: 'All user information and data are kept confidential. All transactions are anonymous.'
  }, {
    icon: '/fea-4.svg',
    title: 'GENEROUS REFERRAL PROGRAM',
    content: 'Get 50% of whatever your affiliates claim free BNB. You also get 0.4% every time they play game and 5% value of giftcard they apply.'
  },
]

const summaryItems: SumProps[] = [
  {
    icon: 'groups',
    number: '152.25 K',
    caption: 'REGISTERED USERS'
  }, {
    icon: 'sports_esports',
    number: '324.53 M',
    caption: 'GAMES PLAYED'
  }, {
    icon: 'payments',
    number: '79.55 BNB',
    caption: 'BNB WON BY USERS'
  },
]

const faqItems: CollapseProps['items'] = [
  {
    key: '1',
    label: 'How to SIGN UP?',
    children: <>
      <p>It is very easy go to <Link>SIGN UP</Link> section at the top menu and you are ready to go!</p>
      <ul>
        <li>Type your user name that you want to use it.</li>
        <li>Type your e-mail addresses.</li>
        <li>Enter and retype your password.</li>
        <li>Enter captcha that the website displays.</li>
        <li>Click the button “Sign Up”.</li>
      </ul>
      <p>Your login information will be encrypted and protected. No one can know these information.</p>
    </>,
  },
  {
    key: '2',
    label: 'How can I earn from Bnbpick.io?',
    children: <p>
      You can claim Free BNB every hours by solving captchas.
      You can play games to earn more and multiply your BNB. Our games use provably fair mechanism to enable the player to verify each roll result and make sure they are not being cheated!
    </p>,
  },
  {
    key: '3',
    label: 'What is "provably fair"?',
    children: <>
      <p>The terminology "Provably Fair" arose from the development of the Blockchain technology, during the rise of BNB is based upon.
        For the "gamer" it mean a revolution in such never-before-imagined things such as:</p>
      <ul>
        <li>fair playing.</li>
        <li>accountability.</li>
        <li>guaranteed anti-cheating.</li>
        <li>instant payouts.</li>
        <li>public ledger.</li>
      </ul>
      <p>Bnbpick.io allow the public to see how outcomes are based on the gambler's input and a secret number that is disclosed and changed for the next rounds every hour for example. This ensures the security to online gamblers to verify if the their's dice roll or card game.</p>
    </>,
  },
  {
    key: '4',
    label: 'How much do I earn from my affiliates?',
    children: <>
      <p>When your users reach level Bronze, you will receive the following commission:</p>
      <ul>
        <li>You will receive 50% commission on total BNB that your user earn from BNB faucets.</li>
        <li>accountability.</li>
        <li>And still 0.4% of the total profit when they play on games.</li>
        <li>You can also get 5% of the gifcard value your user applied.</li>
      </ul>
    </>,
  },
  {
    key: '5',
    label: 'Can I create more than one account?',
    children: <>
      <p>You are allowed to register and use just one account. If you register more than one account, we will disable all your accounts!</p>
    </>,
  },
];

const FeatureItem: FC<FeaProps> = ({ icon, title, content }) => {
  return (
    <Card className="feature-item">
      <div className="icon">
        <Img src={icon} />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </Card>
  )
}

const SummaryItem: FC<SumProps> = ({ icon, number, caption }) => {
  return (
    <div className="summary-item">
      <Icon icon={icon} size={84} fill />
      <h2>{number}</h2>
      <h3>{caption}</h3>
    </div>
  )
}

export const Home = () => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <SiteLayout>
      <Section className="greet">
        <Row gutter={32} align="middle">
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <Img src="/bg1.png" />
          </Col>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <h1>FREE BNB EVERY HOUR!</h1>
            <p>Every hour, we give away up to 0.006 BNB for free through our BNB faucet. No frills, no hidden agenda – just a way to get you started with the incredible worldwide phenomena known as BNB and cryptocurrency.</p>
            <Input placeholder="E-mail Address" />
            <Row gutter={16}>
              <Col span={12}>
                <Btn className="btn-green" block>Log in</Btn>
              </Col>
              <Col span={12}>
                <Btn className="btn-yellow" block>Sign up</Btn>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
      <Section className="feature">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <div className="feature-trustpilot">
              <Img src="/trustpilot_reviews.png" />
            </div>
          </Col>
          <Col span={24}>
            <h1>Product Features</h1>
          </Col>
          {featuresItems.map((data, i) =>
            <Col md={{ span: 12 }} xs={{ span: 24 }} key={i}>
              <FeatureItem {...data} />
            </Col>
          )}
        </Row>
      </Section>
      <Section className="summary">
        <Row gutter={32}>
          {summaryItems.map((data, i) =>
            <Col md={{ span: 8 }} xs={{ span: 24 }} key={i}>
              <SummaryItem {...data} />
            </Col>
          )}
        </Row>
      </Section>
      <Section className="faq">
        <div className="faq-title">
          <h1>What is Bnbpick.io?</h1>
          <p>Bnbpick.io is an Free BNB faucet that enables users the ability to earn free BNB every hour. You are able solve captchas in order to accrue these litecoins.<br />
            Bnbpick.io also provides a platform includes fair games that help you play to earn more BNB faster.</p>
        </div>

        <div className="faq-items">
          <Collapse accordion items={faqItems} defaultActiveKey={['1']} onChange={onChange} />
        </div>
      </Section>
    </SiteLayout>
  );
}