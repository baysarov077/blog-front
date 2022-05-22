import React from "react";
import icon from "../../img/mainphoto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./start.css";
import Features from "./Features";
import Reviews from "./Reviews";
import Footer from "../Footer/Footer";
import { Accordion, Card, CardImg, Col, Row } from "react-bootstrap";

const Starting = () => {
  return (
    <section className="startSection">
      <div className="container">
        <div className="startBlokc">
          <div>
            <div>
              <h1 className="startingHeading">
                <span className="purple">Home</span> for tech <br />
                writers and
                <br /> readers
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                nesciunt expedita libero, in nihil ipsum omnis quis! Animi
                nesciunt quidem, exercitationem repellendus, numquam odio
                placeat aliquam amet non expedita perferendis.
              </p>
            </div>
            <div className="largeBtnBlock">
              <button className="largeBtn">Large button</button>
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
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card className="temacard">
                <CardImg
                  variant="top"
                  src="https://www.spcdn.org/blog/wp-content/uploads/2020/09/cover-4-1110x420.png"
                />
                <Card.Body>
                  <Card.Title>
                  Продающий текст: руководство для копирайтера и бизнеса
                  </Card.Title>
                  <Card.Text>
                  Продающий текст ― это рекламный блок, который мотивирует пользователей на покупку продукта. Задача текста ― продемонстрировать выгоды и достоинства товара, а также развеять страхи и ответить на «боль» клиента.

Текст — не гарантия продаж, но возможность заинтересовать потенциального клиента и подтолкнуть его к принятию решения.

Продающий текст используется в разных форматах:

Текст для посадочной страницы — лендинг. Текст располагается в блоках, которые рассказывают пользователю о полезных характеристиках продукта. Призыв к действию: купить, подписаться, оставить контактные данные.
Текст на главную страницу. Презентация компании на главной странице интернет-магазина. Здесь должны быть блоки: о компании, ее преимуществах, продукции и ее достоинствах. Текст должен стимулировать к изучению и покупке вашей продукции.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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

      <Footer />
    </section>
  );
};

export default Starting;
