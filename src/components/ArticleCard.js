import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { hoverLeave, hoverOver } from "./HoverCard";

const ArticleCard = ({
  data, // object
  id, // string id
  cardOnClick, // function
}) => {
  const coverImageStyle = {
    height: "250px",
    marginBottom: "16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
      className="mt-3"
    >
      <Card
        id={id}
        style={
          data && {
            cursor: "pointer",
            height: "100%",
          }
        }
        onClick={cardOnClick}
        onMouseEnter={() => {
          hoverOver(id);
        }}
        onMouseLeave={() => {
          hoverLeave(id);
        }}
      >
        <Card.Body>
          <div
            style={{
              ...coverImageStyle,
              backgroundImage: `url("${data?.image}")`,
            }}
          ></div>

          <div>
            <Row>
              <Col>
                <div>
                  <Card.Title>{data?.title}</Card.Title>
                </div>
                <p>
                  <b>{data?.author}</b>
                  <br />
                  <small>{data?.date}</small>
                </p>

                <p className="text-justify">
                  <small>
                    <b>
                      {data?.news_desk ? data?.news_desk : "-"} | {" "}
                      {data?.section ? data?.section : "-"}
                    </b>
                  </small>
                </p>
                <p className="text-justify">{data?.lead_paragraph}</p>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleCard;
