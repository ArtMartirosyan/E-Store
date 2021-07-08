import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Modal, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../Redux/Actions";

const HomePage = () => {
  const [productsList, setproductsList] = useState([]);
  const isLogged = useSelector((state) => state.isLogged);
  const inBasket = useSelector((state) => state.inBasket);
  const [detailedDesc, setDetailedDesc] = useState({});
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (product) => {
    setDetailedDesc(product);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setDetailedDesc({});
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        setproductsList(data);
      })
      .catch((error) => console.log("ERRORRRR", error));
  }, []);
  let productsJSX = productsList.map((product, index) => {
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
            onClick={() => dispatch(ADD_TO_BASKET(product.id))}
          >
            Add to Basket
          </Button>
          {inBasket.includes(product.id) && (
            <Button
              style={{
                margin: "0 auto",
              }}
              type="default"
              onClick={() => dispatch(REMOVE_FROM_BASKET(product.id))}
            >
              Remove from Basket
            </Button>
          )}
          <div style={{ marginTop: "5px" }}>PRICE ${product.price}</div>
          <br></br>
          <Card.Meta title={product.title} description={product.description} />

          <Button
            type="link"
            style={{
              position: "absolute",
              bottom: "1px",
            }}
            onClick={() => showModal(product)}
          >
            {" "}
            More Details{" "}
          </Button>
          <Modal
            centered={true}
            width={1000}
            mask={false}
            title={detailedDesc.title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h3 style={{ border: "1px solid grey" }}>
              Product description -{detailedDesc.description}
            </h3>
            <h3>Price ${detailedDesc.price}</h3>
            <h3>Color :{detailedDesc.color}</h3>
            <h3>Size :{detailedDesc.size}</h3>
            <Image src={detailedDesc.image} width={400} />
          </Modal>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          border: "solid 1px grey",
          borderWidth: "5px",
          paddingBottom: "20px",
        }}
      >
        Available products - - - Start Shopping
      </h1>
      {isLogged && (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{productsJSX}</Row>
      )}
    </div>
  );
};

export default HomePage;
