import './App.css';
import { useState } from 'react';

function App() {
  const [laneNumbers, setLaneNumbers] = useState('');

  function getSingleDigitLaneNumber(num: number): number {
    switch (num) {
      case 6:
        return 3;
      case 5:
        return 2;
      default:
        return num;
    }
  }

  function getLaneNumbers(num: number): number[] {
    if (num <= 0) {
      return [0];
    }

    let xArray = [];
    let x = num;
    xArray.push(num);
    while (true) {
      if (x <= 6) {
        const lastX = xArray.slice(-1)[0];
        const singleX = getSingleDigitLaneNumber(x);
        if (lastX != singleX) {
          xArray.push(singleX);
        }
        return xArray;
      }
      x = Math.floor(x * 0.7);
      xArray.push(x);
    }
  }

  function getLaneNumbersByInput(numStr: string) {
    const rn = parseInt(numStr, 10);
    if (isNaN(rn)) {
      setLaneNumbers('');
      return;
    }

    const lns = getLaneNumbers(rn).join(', ');
    setLaneNumbers(lns);
  }

  function changeRankNumber(event: React.ChangeEvent<HTMLInputElement>): void {
    if (typeof event.target.value === 'string') {
      getLaneNumbersByInput(event.target.value);
    }
  }

  return (
    <>
      <div className="pure-form pure-u-1">
        <p id="nameHolder">レーン計算機</p>
        <input
          id="rankNumber"
          onChange={changeRankNumber}
          className="pure-input-1 pure-input-rounded"
          type="number"
          placeholder="現在の順位"
        />
        <p id="laneNumbers">{laneNumbers}</p>
      </div>
    </>
  );
}

export default App;
