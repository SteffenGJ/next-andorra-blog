const Notification = ({ notification, date }) => {
  return (
    <div className="rounded-lg p-2 bg-blue-100 shadow text-left mb-2">
      <p className="text-sm text-gray-400">{date}</p>
      <p>{notification}</p>
    </div>
  );
};

export default Notification;
