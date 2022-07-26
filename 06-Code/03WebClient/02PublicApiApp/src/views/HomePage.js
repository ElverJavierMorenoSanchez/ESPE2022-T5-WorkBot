import Table from "../components/Home/Table";
import { getArticles } from "../services/axios";
import "../index.css";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import FormArticle from "../components/Home/FormArticle";
import TableOptions from "../components/Home/TableOptions";
import "../styles/TableLayout.css";

const HomePage = () => {
  const [formArticle, setFormArticle] = useState({
    article: "",
  });

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const response = await getArticles(formArticle.article);
      setArticles(response);
    }

    loadArticles();
  }, [formArticle]);

  return (
    <>
      <Box>
        <br />
        <FormArticle
          formArticle={formArticle}
          setFormArticle={setFormArticle}
        />
        <br />
        <br />
        <div className="container">
          <TableOptions />
          <Table articles={articles} />
        </div>
      </Box>
    </>
  );
};
export default HomePage;
