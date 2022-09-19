import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900 text-white ">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
