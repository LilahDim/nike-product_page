import {
  Hero,
  PopularProducts,
  Services,
  SuperQuality,
  SpecialOffer,
  CustomerReviews,
  Subscribed,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding padding-x sm:py-32 p-16 w-full">
        <Subscribed />
      </section>
      <section className="padding-x bg-black pb-8 padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
