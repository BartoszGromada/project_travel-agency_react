import React from 'react';
import propTypes from 'prop-types';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: propTypes.node,
};

export default MainLayout;
