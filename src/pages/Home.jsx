import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Container, Typography } from "@mui/material";
import Gridcards from "../components/Gridcards";
import nowplaying from "../services/nowplaying.js";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [iniciou, setIniciou] = useState(true);
  const imagePath = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    if (iniciou) {
      nowplaying(setFilmes);
      console.log("criou");
      setIniciou(false);
    }
    console.log(filmes);
  }, [iniciou, filmes]);
  return (
    <div>
      <Navbar />

      <Container
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Box margin={2}>
          <Typography variant="overline" display="block">
            Desenvolvido por{" "}
            <a
              href="https://github.com/nyckaique/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              Nycollas Kaique
            </a>
          </Typography>
          <Typography variant="h3">Em cartaz</Typography>
        </Box>
        <Gridcards filmes={filmes} imagePath={imagePath} />
      </Container>
    </div>
  );
}
