import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = ({ placeholder, searchArticle }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchArticle(query);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center mb-8">
        <div className="col-12 col-md-12 col-lg-8 mb-0 mb-lg-0">
          <Form onSubmit={handleSubmit}>
            <div className="input-group">
              <Form.Control
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
              />
              <div className="input-group-append">
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
