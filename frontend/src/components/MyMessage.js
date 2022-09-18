

const MyMessage = ({messageTitle, messageContent, status}) => {
  return (
    <div className="MyMessage">
      {/* Message 내용 */}
      <div className="my_message_wrapper">
        {/* <h2 className={`my_message_${status}`}> */}
        <h2 className="message_title">
          {messageTitle}
        </h2>
        <div className="message_content">
          {messageContent}
        </div>
      </div>


    </div>

  )
};

export default MyMessage;