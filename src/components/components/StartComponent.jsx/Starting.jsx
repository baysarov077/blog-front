import React from "react";
import icon from "../../img/mainphoto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./start.css";
import Features from "./Features";
import Reviews from "./Reviews";
import Footer from "../Footer/Footer";
import { Accordion, Card, CardImg, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Starting = () => {
  const navigate = useNavigate();
  const hadleToBlog = () => {
    navigate("/blog");
  };
  return (
    <section className="startSection">
      <div className="container">
        <div className="startBlokc">
          <div>
            <div>
              <h1 className="startingHeading">
                <span className="purple">Блоги</span> студентов <br />
                Intocode
                <br />
              </h1>
            </div>
            <div>
              <p>
                1. Прогуляться по другим блогам и найти «тексты о себе», которые
                вам нравятся, которые привлекли ваше внимание и проанализировать
                почему. <br /> 2. Составить список из 5-10-15 блогов, которые
                вам нравятся именно с визуальной точки зрения. Проанализировать,
                чем именно они вам нравятся. Подумать, какие элементы вы могли
                бы применить в своем блоге и почему.
              </p>
            </div>
            <div className="largeBtnBlock">
              <button onClick={hadleToBlog} className="largeBtn">
                Create blog
              </button>
            </div>
          </div>
          <div className="imgMain1">
            <img className="startImg" src={icon} alt="" />
          </div>
        </div>
      </div>
      <Features />
      <Reviews />
      <div className="container">
        {/* <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card className="temacard">
                <CardImg
                  variant="top"
                  src="https://it-aurora.ru/wp-content/uploads/2021/03/avtomatizaciya-malogo-biznesa.jpg"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
        <div className="questions">
          <Accordion>
            <Accordion.Item className="question" eventKey="0">
              <Accordion.Header>Вопрос 1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="question" eventKey="1">
              <Accordion.Header>Вопрос 2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="question" eventKey="2">
              <Accordion.Header>Вопрос 3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="question" eventKey="3">
              <Accordion.Header>Вопрос 4</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Starting;
