import Navbar from './Navbar';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow p-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
