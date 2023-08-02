import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from ".";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-col sm:flex-row p-6 rounded-[20px] md:items-center items-start ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex-shrink-0 mr-6 mb-5`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div>
      <h3 className={`text-white font-semibold mb-2`}>{title}</h3>
      <p className={`${styles.paragraph} font-normal `}>{content}</p>
    </div>
  </div>
);

// Main component
const Business = () => (
  <section className={layout.section} id="features">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, we’ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" content="Get Started" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
