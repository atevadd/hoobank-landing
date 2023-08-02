import styles from "../style";
import { feedback } from "../constants";
import { FeedbackCard } from ".";

const Testimonials = () => (
  <section id="testominials" className={`${styles.paddingY}`}>
    <div className="mb-10 flex flex-col md:flex-row items-center">
      <h2 className={`${styles.heading2} w-full md:w-[50%] mr-0 md:mb-10`}>
        What people are saying about us
      </h2>
      <p className={`${styles.paragraph} w-full md:w-[35%]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    {/* Testimonials section */}
    <div className={`flex flex-col sm:flex-row gap-10`}>
      {feedback.map((feed, index) => (
        <FeedbackCard key={index} {...feed} />
      ))}
    </div>
  </section>
);

export default Testimonials;
