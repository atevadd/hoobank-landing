import { Button } from ".";
import { card } from "../assets";

import styles, { layout } from "../style";

const CardDeal = () => (
  <section
    id="carddeal"
    className={`${layout.section} mb:flex-col flex-col-reverse`}
  >
    <div
      className={`flex-1  ${styles.flexStart} md:mr-10 mr-0 md:mt-0 mt-10 mb-10 md:mb-10 relative ${styles.flexStart} flex-col`}
    >
      <h2 className={styles.heading2}>
        Find a better card deal in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button content="Get Started" styles="mt-7" />
    </div>

    <div className={layout.sectionInfo}>
      <img
        src={card}
        alt="cards"
        className="w-[90%] h-[90%] object-contain block mx-auto sm:mx-0"
      />
    </div>
  </section>
);

export default CardDeal;
