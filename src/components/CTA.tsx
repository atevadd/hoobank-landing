import { Button } from ".";
import styles from "../style";

const CTA = () => (
  <section
    id="cta"
    className={`flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-discount-gradient ${styles.padding} ${styles.marginY} rounded-[1.25rem]`}
  >
    <div>
      <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} w-full sm:w-[55%] `}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <Button content="Get Started" styles="sm:m-0 mt-6 sm:mt-6 mb-6 sm:mb-0" />
  </section>
);

export default CTA;
