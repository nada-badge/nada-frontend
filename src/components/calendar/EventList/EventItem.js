const EventItem = ({ title, start, end, color }) => {
  return (
    <div>
      <div color={color} />
      <div className="title">{title}</div>
      <div className="dateWrapper">
        {start}~{end}
      </div>
    </div>
  );
};
export default EventItem;
