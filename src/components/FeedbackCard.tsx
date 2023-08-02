import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({
  content,
  name,
  title,
  img,
}: {
  content: string;
  name: string;
  title: string;
  img: any;
}) => (
  <div className="flex-1 flex flex-col justify-between feedback-card p-10 rounded-[1.25rem]">
    <img
      src={quotes}
      alt="quotes"
      className="w-[42px] h-[42px] object-contain"
    />
    <h4 className={`text-white mt-5 mb-5 text-[1.125rem] font-normal`}>
      {content}
    </h4>

    <div className="flex flex-row gap-4 items-center">
      <img
        src={img}
        alt="feedback img"
        className="w-[3rem] h-[3rem] rounded-full object-contain"
      />
      <div>
        <h4 className="font-normal text-white text-[1.25rem] leading-8">
          {name}
        </h4>
        <p className={`${styles.paragraph} text-[1rem]`}>{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
