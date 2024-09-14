import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import QueryProvider from "@/components/layout/QueryProvider";

const Home = () => {
  return (
    <>
      <Header />
      <QueryProvider>
        <Main />
      </QueryProvider>
      <Footer />
    </>
  );
};

export default Home;
