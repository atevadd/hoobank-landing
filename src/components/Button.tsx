const Button = ({ styles, content }: { styles: string; content: string }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary text-[18px] rounded-lg ${styles}`}
    >
      {content}
    </button>
  );
};

export default Button;
