import CheckListItem from './CheckListItem';

const CheckList = ({ list }) => {
  const BoxStyle = {
    height: '21px',
    position: 'relative',
    display: 'inline-flex',
    gap: '12px',
  };

  return (
    <div style={BoxStyle}>
      {list.map((item) => (
        <CheckListItem text={item.text} key={item.id} checked={item.checked} />
      ))}
    </div>
  );
};

export default CheckList;
