import { range } from './utils';

function Grid({ numRows, numCols }) {
  const rowStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const gridStyles = {
    width: '100px',
    height: '100px',
    border: 'solid grey',
    borderRadius: '5px',
  };

  const todo = range(numRows).map((row, rowIndex) => (
    <div key={rowIndex} style={rowStyles} className='row'>
      {range(numCols).map((col, colIndex) => (
        <div key={colIndex} style={gridStyles} className='cell'></div>
      ))}
    </div>
  ));

  return (
    <div style={{}} className="grid">
      {todo}
    </div>
  );
}

export default Grid;
