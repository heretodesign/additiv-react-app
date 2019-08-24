import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link } from "react-router-dom"
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import NoticeNav from './components/content/NoticeNav'

const HomePage = lazy(() => import('./pages/HomePage'));

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <NoticeNav />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomePage} />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
