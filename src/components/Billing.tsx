import { bill, apple, google } from "../assets";

import styles, { layout } from "../style";

const Billing = () => (
  <section id="billing" className={layout.section}>
    <div className={layout.sectionInfo}>
      <img
        src={bill}
        alt="billing"
        className="w-[90%] h-[90%] object-contain block mx-auto sm:mx-0"
      />
    </div>

    <div
      className={`flex-1  ${styles.flexStart} md:mr-10 mr-0 md:mt-0 mt-10 relative ${styles.flexStart} flex-col`}
    >
      <h2 className={styles.heading2}>
        Easily control your billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className={`flex flex-row gap-3 mt-5`}>
        <img src={apple} alt="app store" />
        <img src={google} alt="play store" />
      </div>
    </div>
  </section>
);

export default Billing;
