import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollTop from '../components/ScrollTop';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900 text-white relative">
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default MyApp;
