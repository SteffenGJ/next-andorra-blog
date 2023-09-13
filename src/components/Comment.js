const Comment = ({ data }) => {
  return (
    <div className="py-3">
      <p className="text-gray-400 text-sm">{data.date}</p>
      <div className="bg-gray-100 rounded-lg p-3 flex flex-col w-fit">
        <p className="font-semibold">{data.user.username}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Comment;
