import React, { useEffect, useState } from "react";
import "./style.css";
export default function BTBurger({
  dataBuger,
  addItemBurger,
  deleteItemBurger,
}) {
  const { burger, menu } = dataBuger;
  const [salad, setSalad] = useState(burger.salad);
  const [cheese, setCheese] = useState(burger.cheese);
  const [beef, setBeef] = useState(burger.beef);
  const [total, setTotal] = useState(dataBuger.total);
  const [saladArr, setSaladArr] = useState(() => {
    const preArr = [];
    for (let index = 0; index < salad; index++) {
      preArr.push("");
    }
    return preArr;
  });
  const [cheeseArr, setCheeseArr] = useState(() => {
    const preArr = [];
    for (let index = 0; index < cheese; index++) {
      preArr.push("");
    }
    return preArr;
  });
  const [beefArr, setBeefArr] = useState(() => {
    const preArr = [];
    for (let index = 0; index < beef; index++) {
      preArr.push("");
    }
    return preArr;
  });
  useEffect(() => {
    setCheese(burger.cheese);
    setSalad(burger.salad);
    setBeef(burger.beef);
    setTotal(
      burger.cheese * menu.cheese +
        burger.salad * menu.salad +
        burger.beef * menu.beef
    );
  });
  const handleOnClickAdd = (item) => {
    addItemBurger(item);
    if (item === "salad") {
      setSaladArr([...saladArr, ""]);
    } else if (item === "cheese") {
      setCheeseArr([...cheeseArr, ""]);
    } else {
      setBeefArr([...beefArr, ""]);
    }
  };
  const handleOnClickDelete = (item) => {
    const newArrSalad = saladArr;
    const newArrCheese = cheeseArr;
    const newArrBeef = beefArr;
    if (item === "salad") {
      if (salad > 0) {
        newArrSalad.splice(0, 1);
        deleteItemBurger(item);
      } else {
        alert("Số lượng salad bé hơn 0");
      }
    } else if (item === " cheese") {
      if (cheese > 0) {
        deleteItemBurger(item);
        newArrCheese.splice(0, 1);
      } else {
        alert("Số lượng cheese bé hơn 0");
      }
    } else {
      if (beef > 0) {
        deleteItemBurger(item);
        newArrBeef.splice(0, 1);
      } else {
        alert("Số lượng beef bé hơn 0");
      }
    }
  };
  console.log(cheeseArr);
  return (
    <div className="container">
      <div className="burger m-auto">
        <div className="bugerLeft">
          <div className="breadTop"></div>
          {saladArr.map((item, index) => (
            <div key={index} className="salad">
              {item}
            </div>
          ))}
          {cheeseArr.map((item, index) => (
            <div key={index} className="cheese">
              {item}
            </div>
          ))}
          {beefArr.map((item, index) => (
            <div key={index} className="beef">
              {item}
            </div>
          ))}
          <div className="breadBottom"></div>
        </div>
        <div classname="bugerRight">
          <h2>Chọn thức ăn</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Thức ăn</th>
                <th>Thay đổi</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Salad</td>
                <td>
                  <button
                    onClick={() => handleOnClickAdd("salad")}
                    type="button"
                    className="btn btn-success mr-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleOnClickDelete("salad")}
                    type="button"
                    className="btn btn-danger"
                  >
                    -
                  </button>
                </td>
                <td>{menu.salad}</td>
              </tr>
              <tr>
                <td>Cheesse</td>
                <td>
                  <div>
                    <div>
                      <button
                        onClick={() => handleOnClickAdd("cheese")}
                        type="button"
                        className="btn btn-success mr-1"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleOnClickDelete("cheese")}
                        type="button"
                        className="btn btn-danger"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </td>
                <td>{menu.cheese}</td>
              </tr>
              <tr>
                <td>Beef</td>
                <td>
                  <button
                    onClick={() => handleOnClickAdd("beef")}
                    type="button"
                    className="btn btn-success mr-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleOnClickDelete("beef")}
                    type="button"
                    className="btn btn-danger"
                  >
                    -
                  </button>
                </td>
                <td>{menu.beef}</td>
              </tr>
            </tbody>
          </table>
          <h3>Tổng tiền: {total}</h3>
          <button type="button" className="btn btn-primary">
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}
