import React, { useEffect, useRef, useState } from "react";
import { getArticleData } from "../api/api";
import { Col, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./../assets/css/articles.css";
import ArticleCard from "../components/ArticleCard";
import moment from "moment";
import SearchBar from "../components/SearchBar";

const ArticleList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const openArticle = useRef(null);

  useEffect(() => {
    getArticle();
  }, [search]);

  const openDetailArticle = (artcl) => {
    openArticle.current = artcl;
    window.open(openArticle.current);
  };

  const getArticle = () => {
    setLoading(true);

    const onSuccess = (res) => {
      setLoading(false);

      let articleData = () => {
        let article = [];

        for (let i in res.data.response.docs) {
          article.push({
            title: res.data.response.docs[i].headline.main,
            author: res.data.response.docs[i].byline.original
              ? res.data.response.docs[i].byline.original
              : "-",
            news_desk: res.data.response.docs[i].news_desk,
            section: res.data.response.docs[i].section_name,
            date: moment(res.data.response.docs[i].pub_date).format("MMM DD, YYYY"),
            image: "https://static01.nyt.com/" + res.data.response.docs[i].multimedia[0]?.url,
            lead_paragraph: res.data.response.docs[i].lead_paragraph,
            url: res.data.response.docs[i].web_url,
          });
        }

        return article;
      };
      setData(articleData);
    };

    const onFailure = (err) => {
      setLoading(false);
      console.log("error ", err);
    };

    getArticleData(search, onSuccess, onFailure);
  };

  return (
    <React.Fragment>
      <div>
        <Col md={12}>
          <h3 className="article-logo mt-3">New York Times Article</h3>
        </Col>

        <SearchBar
          placeholder={"ex: business"}
          searchArticle={(artcl) => setSearch(artcl)}
        />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <Spinner variant="primary" />
        </div>
      ) : (
        <div className="article-row">
          {data.map((item, i) => {
            return (
              <Col
                lg={4}
                md={6}
                key={i}
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginBottom: "25px",
                }}
              >
                <ArticleCard
                  data={item}
                  id={i}
                  cardOnClick={() => openDetailArticle(item.url)}
                />
              </Col>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default ArticleList;
