import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './AppLayout.module.scss';
export interface IAppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={style['app-layout']}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default AppLayout;