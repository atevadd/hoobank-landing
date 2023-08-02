import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Hero,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
const App = () => (
  <div className="bg-primary w-full min-h-screen overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
