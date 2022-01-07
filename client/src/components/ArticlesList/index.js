import Grid from "@mui/material/Grid";
import Article from "./Article";

export default function ArticlesList({ articles }) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <Grid container item spacing={2}>
      {articles.map((article, idx) => (
        <Grid key={idx} item xs={6}>
          <Article data={article} />
        </Grid>
      ))}
    </Grid>
  );
}
