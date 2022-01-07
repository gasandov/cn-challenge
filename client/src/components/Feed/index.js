import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import CNPagination from "../Pagination";
import ArticlesList from "../ArticlesList";
import { newsApi } from "../../services/axiosNews";
import { useDebounce } from "../../hooks/useDebounce";
import { buildArticlePagination } from "../../utils/news";
import { useStyles } from "./styles";

async function getHeadlineNews() {
  return newsApi.post("/headlines", { q: "UK" });
}

async function getNewsByKeyword(q) {
  return newsApi.post("/", { q });
}

export default function Feed() {
  const classes = useStyles();

  const [news, setNews] = useState([]);
  const [term, setTerm] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [newsPagination, setNewsPagination] = useState({});
  const debouncedSearchTerm = useDebounce(term, 500);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { articles, totalResults },
        } = await getHeadlineNews();

        assignNewsData(articles, totalResults, 5);
      } catch (error) {
        setErrMsg(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      (async () => {
        try {
          const {
            data: { articles, totalResults },
          } = await getNewsByKeyword(debouncedSearchTerm);

          assignNewsData(articles, totalResults, 5);
        } catch (error) {
          setErrMsg(error);
        }
      })();
    }
  }, [debouncedSearchTerm]);

  const assignNewsData = (articles, totalResults, pageSize) => {
    const pagination = buildArticlePagination(articles, totalResults, pageSize);
    setNews(pagination.articles);
    setNewsPagination({
      pages: pagination.pages,
      currentPage: pagination.currentPage,
    });
  };

  const handleOnPageChange = (_, page) => {
    setNewsPagination((prevState) => ({
      ...prevState,
      currentPage: page,
    }));
  };

  const handleInputChange = (evt) => {
    setTerm(evt.target.value);
  };

  return (
    <Container fixed>
      <Container className={classes.container}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.inputField}
              label="Search for a new"
              onChange={handleInputChange}
              variant={"outlined"}
              value={term}
            />
          </Grid>
          {news.length > 0 && (
            <ArticlesList articles={news[newsPagination.currentPage - 1]} />
          )}
          {errMsg && (
            <Grid item>
              <Typography>Articles could not be fetched</Typography>
            </Grid>
          )}
          <Grid container item justifyContent="center" xs={12}>
            <CNPagination
              data={newsPagination}
              handleChange={handleOnPageChange}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
