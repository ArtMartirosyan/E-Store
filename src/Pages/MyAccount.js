import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Requests } from "../Services";
import { Row, Col, Card, Button, Table, Modal, Image } from "antd";
import { REMOVE_FROM_BASKET } from "../Redux/Actions";

const MyAccount = () => {
  const dispatch = useDispatch();
  const inBasket = useSelector((state) => state.inBasket);

  const [myBasket, setMyBasket] = useState([]);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [PurchaseHistoryData, setPurchaseHistoryData] = useState([]);

  const purchaseHistoryColumns = [
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const handlePurchase = () => {
    setPurchaseHistoryData(myBasket);
    setIsPurchaseModalOpen(false);
    setMyBasket([]);
  };

  useEffect(() => {
    if (inBasket.length) {
      let a =
        "products?" +
        inBasket.reduce((acc, item, i) => {
          acc += i !== inBasket.length - 1 ? `id=${item}&` : `id=${item}`;
          return acc;
        }, "");
      Requests.getHttpRequest(a).then((data) => {
        setMyBasket(data);
      });
    } else {
      setMyBasket([]);
    }
  }, [inBasket]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>My Account</h1>
      <Modal
        title="Are you sure you want to make the purchase?"
        visible={isPurchaseModalOpen}
        onOk={() => handlePurchase()}
        onCancel={() => setIsPurchaseModalOpen(false)}
      ></Modal>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Col span={18} style={{ display: "flex", flexDirection: "column" }}>
          <h2>Purchase History</h2>
          <Table
            columns={purchaseHistoryColumns}
            dataSource={PurchaseHistoryData}
          />
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: "200px",
              height: "300px",
              marginTop: "5px",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "50px",
            }}
            cover={
              <img
                alt="example"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrO43xHSa6I2eFXoXgA1lsqJQwrGSZrXE7w&usqp=CAU"
                }
              />
            }
          >
            <Card.Meta title="Admin" description="email: admin.com" />
          </Card>
        </Col>
      </Row>
      {myBasket.length ? (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                textAlign: "center",
                border: "1px solid white",
                marginTop: "10px",
                width: "300px",
              }}
            >
              Cart Basket
            </h1>
          </div>
          <div style={{ display: "flex" }}>
            <h2>
              My Basket Sum{" $"}
              {myBasket.reduce((acc, item) => {
                return +acc + +item.price;
              }, 0)}
            </h2>
            <Button
              type="primary"
              onClick={() => setIsPurchaseModalOpen(true)}
              style={{ marginLeft: "20px", marginTop: "8px" }}
            >
              Make the Purchase
            </Button>
          </div>
        </div>
      ) : (
        <img
          src={
            "https://mocah.org/uploads/posts/612902-Marilyn-Monroe-quote.jpg"
          }
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      )}
      <Row>
        {myBasket.map((product, index) => {
          return (
            <Col key={index} className="gutter-row" style={{ display: "grid" }}>
              <Card
                hoverable
                style={{ width: 280, marginTop: "5px", textAlign: "center" }}
                cover={<img alt="example" src={product.image} />}
              >
                <Button
                  style={{
                    margin: "0 auto",
                  }}
                  type="default"
                  onClick={() => dispatch(REMOVE_FROM_BASKET(product.id))}
                >
                  Remove from Basket
                </Button>
                <div style={{ marginTop: "5px" }}>PRICE ${product.price}</div>
                <br></br>
                <Card.Meta
                  title={product.title + " " + product.price}
                  description={product.description}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MyAccount;
