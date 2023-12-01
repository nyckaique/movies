import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Modal from "./Modal";

export default function Gridcards({ filmes, imagePath }) {
  return (
    <div>
      <Box>
        <Grid
          container
          columns={12}
          spacing={2}
          style={{ paddingBottom: "1em" }}
        >
          {filmes.map((filme, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Paper
                  style={{
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "0.5em",
                  }}
                  elevation={6}
                >
                  <Card
                    style={{
                      height: "100%",
                      display: "flex",
                      justiyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 250 }}
                      image={`${imagePath}${filme.poster_path}`}
                      title="green iguana"
                    />
                    <CardContent style={{ flexGrow: "1" }}>
                      <Typography gutterBottom component="div">
                        {filme.title}
                      </Typography>

                      <Typography>
                        <Rating
                          name="read-only"
                          value={filme.vote_average / 2}
                          readOnly
                          precision={0.25}
                          max={5}
                          size="small"
                        />
                      </Typography>
                    </CardContent>
                    <Modal title={filme.title} overview={filme.overview} />
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
