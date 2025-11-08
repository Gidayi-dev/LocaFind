// components/LayoutWrapper.jsx
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default LayoutWrapper;