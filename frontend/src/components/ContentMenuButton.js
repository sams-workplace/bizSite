import MyButton from "./MyButton";

const ContentMunuButton = ({left, center, right}) => {

  return (
    <div>
      <menu className = 'row1'>
        {left}
      </menu>
      <div className="row1">
        {center}
      </div>
      <div className="row1">
        {right}
      </div>
    </div>
  )
};

export default ContentMunuButton;