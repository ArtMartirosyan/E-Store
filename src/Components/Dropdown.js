import React, { useEffect } from "react";
import { useState } from "react";
import {
  DownOutlined,
  UpOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const Dropdown = ({ data, onChange }) => {
  console.log("data", data);
  console.log("onChange", onChange);
  const [isDropDownVisible, setIsDropdownVisible] = useState(false);
  const [isChildClicked, setIsChildClicked] = useState(false);
  const [childState, setChildState] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const [path, setPath] = useState([]);

  const openChildren = (item, index) => {
    if (!path.includes(item.label)) {
      setPath([...path, item]);
    }
    if (typeof item === "object" && item.children) {
      let Child = item.children.map((item, index) => {
        return item;
      });
      setChildState(Child);
      setIsChildClicked(true);
    } else {
      setIsDropdownVisible(false);
      setIsChildClicked(false);
    }
    setIndexes([...indexes, index]);
  };
  const goBack = () => {
    setPath([]);
    setIsChildClicked(false);
    setIndexes([]);
  };
  const clearPath = () => {
    setIsChildClicked(false);
    setPath([]);
    setIndexes([]);
  };
  useEffect(() => {
    onChange(path, indexes);
  }, [path]);

  return (
    <div style={{ height: "50vh" }}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          onBlur={() => setIsDropdownVisible(false)}
          onFocus={() => setIsDropdownVisible(true)}
          readOnly
          placeholder="Select Country"
          style={{ paddingLeft: "40px", cursor: "pointer" }}
        ></input>
        {isDropDownVisible ? (
          <UpOutlined
            style={{ position: "absolute", top: "8px", left: "170px" }}
            onClick={() => setIsDropdownVisible(false)}
          />
        ) : (
          <DownOutlined
            style={{
              position: "absolute",
              top: "10px",
              left: "170px",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsDropdownVisible(true);
              setPath([]);
              setIndexes([]);
              setIsChildClicked(false);
            }}
          />
        )}
        <ul
          style={{
            listStyle: "none",
            border: "2px solid white",
            width: "300px",
          }}
        >
          <li style={{ border: "1px solid grey", color: "#b4bfd1" }}>
            {path.map((item, index) => {
              return index === path.length - 1 ? item.label : item.label + "/";
            })}
            <button
              style={{ float: "right", fontSize: "smaller" }}
              onClick={clearPath}
            >
              clear
            </button>
          </li>
          {isDropDownVisible &&
            (isChildClicked ? (
              <div>
                <button
                  onClick={goBack}
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    left: "90px",
                    marginTop: "1px",
                  }}
                >
                  {" "}
                  Go Back{" "}
                </button>
                {childState.map((item, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        borderBottom: "1px solid grey",
                      }}
                      onClick={() => openChildren(item, index)}
                    >
                      {item.label}
                      {item.children ? (
                        <CaretRightOutlined
                          style={{
                            position: "relative",
                            alignSelf: "flex-end",
                          }}
                        />
                      ) : (
                        <button>select</button>
                      )}
                    </li>
                  );
                })}
              </div>
            ) : (
              <div>
                {data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => openChildren(item, index)}
                      style={{
                        borderBottom: "1px solid grey",
                      }}
                    >
                      {item.label}

                      {item.children ? (
                        <CaretRightOutlined
                          style={{
                            position: "relative",
                            alignSelf: "flex-end",
                          }}
                        />
                      ) : (
                        <button style={{ float: "right", fontSize: "smaller" }}>
                          select
                        </button>
                      )}
                    </li>
                  );
                })}
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;
