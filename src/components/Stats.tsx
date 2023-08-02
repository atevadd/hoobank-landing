import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-col sm:flex-row  justify-center items-center gap-5 sm:mb-20 mb-10`}
  >
    {stats.map((stat, index) => (
      <div key={index} className="flex-1 flex flex-wrap items-center  mr-4 ">
        <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white mr-2">
          {stat.value}
        </h4>
        <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]  text-gradient uppercase sm:ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
