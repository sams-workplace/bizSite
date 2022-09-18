const MyButton = ({text, type, onClick}) => {

  const btnType = ['positivie', 'negative'].includes(type)? type: 'default';

  return (
    <button
    className={["MyButton", `MyButton_${type}`].join(" ")}
    onClick={onClick}
    >
      {text}
    </button>
  )
};

MyButton.defaultProps = {
  type: 'default',
}

export default MyButton;