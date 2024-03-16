import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Caroulcel from "./Caroucel";
// import Title from "./Title";
// img
// import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
// import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image from "../Components/image.png";
import imgcuidad from "../Components/imgcuidad.png";

const Title = ({ text, textAlign, sx }: any): any => {
  return (
    <Typography
      variant="h4"
      component="h3"
      sx={{
        fontWeight: "700",
        textAlign: textAlign,
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  const [expanded, setExpanded] = useState({
    uno: false,
    dos: false,
    tres: false,
    cuatro: false,
  });

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Box
    //   container
    //   spacing={{ xs: 4, sm: 4, md: 0 }}
    //   sx={{
    //     py: 10,
    //     px: 2,
    //   }}
    >
      <Box
        component="article"
        sx={{
          // px: 4,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "grid",
        }}
      >
        <Title
          text={"Tu aliado al éxito"}
          textAlign={"center"}
          sx={{ marginTop: "30px" }}
        />
        <Box
          sx={{
            // px: 4,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "20px",
            fontSize: 20,
          }}
        >
          Conjugamos la experiencia de profesionales altamente capacitados para
          brindar
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: 20,
          }}
        >
          soluciones adaptadas a tus necesidades y las de tu empresa.
        </Box>

        <div style={{ display: "flex", columnGap: "20px", marginTop: "50px" }}>
          <Card sx={{ width: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton
                onClick={(newValue: any): void =>
                  setExpanded((prev) => ({
                    ...prev,
                    uno: !expanded?.uno,
                  }))
                }
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded?.uno}>
              <CardContent>
                <Typography>
                  Brindamos servicios de calidad a un bajo costo. Nuestra
                  característica distintiva es definir una estrategia que
                  anticipe los resultados de una gestión contable exitosa a
                  través de profesionales matriculados. Hacemos posible la
                  exteriorización y justificación de tus bienes y negocios
                  asumiendo costos impositivos razonables.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <Card sx={{ width: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton
                onClick={(): void =>
                  setExpanded((prev) => ({
                    ...prev,
                    dos: !expanded.dos,
                  }))
                }
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded.dos}>
              <CardContent>
                <Typography>
                  Brindamos servicios de calidad a un bajo costo. Nuestra
                  característica distintiva es definir una estrategia que
                  anticipe los resultados de una gestión contable exitosa a
                  través de profesionales matriculados. Hacemos posible la
                  exteriorización y justificación de tus bienes y negocios
                  asumiendo costos impositivos razonables.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <Card sx={{ width: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton
                onClick={(): void =>
                  setExpanded((prev) => ({
                    ...prev,
                    tres: !expanded.tres,
                  }))
                }
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded.tres}>
              <CardContent>
                <Typography>
                  Brindamos servicios de calidad a un bajo costo. Nuestra
                  característica distintiva es definir una estrategia que
                  anticipe los resultados de una gestión contable exitosa a
                  través de profesionales matriculados. Hacemos posible la
                  exteriorización y justificación de tus bienes y negocios
                  asumiendo costos impositivos razonables.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <Card sx={{ width: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton
                onClick={(): void =>
                  setExpanded((prev) => ({
                    ...prev,
                    cuatro: !expanded.cuatro,
                  }))
                }
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded.cuatro}>
              <CardContent>
                <Typography>
                  Brindamos servicios de calidad a un bajo costo. Nuestra
                  característica distintiva es definir una estrategia que
                  anticipe los resultados de una gestión contable exitosa a
                  través de profesionales matriculados. Hacemos posible la
                  exteriorización y justificación de tus bienes y negocios
                  asumiendo costos impositivos razonables.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#dadfe0",
          marginTop: "50px",
        }}
      >
        <img
          src={imgcuidad}
          alt=""
          style={{
            width: "50%",
          }}
        />

        <div
          style={{
            border: "1px solid",
            width: "780px",
            height: "380px",
            backgroundColor: "#fff",
            position: "absolute",
            right: 200,
          }}
        >
          <div
            style={{
              fontSize: 35,
              fontFamily: "Arial",
              fontWeight: 700,
              color: "#000",
              justifyContent: "center",
              display: "flex",
              marginTop: 50,
            }}
          >
            Acerca de nosotros
          </div>
          <div
            style={{
              fontSize: 25,
              fontFamily: "Arial",
              color: "#000",
              justifyContent: "center",
              display: "flex",
              margin: 25,
            }}
          >
            Somos un grupo de profesionales con experiencia que trabaja desde
            hace años en equipo. Nuestra misión es ser tu socio confiable en el
            ámbito de los servicios que ofrecemos, brindándote soluciones
            innovadoras e integrales y adaptadas a tus necesidades.
          </div>
          <Button
            sx={{
              //   bgcolor: "orange",
              //   display: "flex",
              //   justifyContent: "center",

              marginTop: "30px",
              marginLeft: "320px",
              //   width: "100px",
              display: "flex",
              fontSize: 15,
              bgcolor: "#e9e025",
              // width: 250,
              fontFamily: "Arial",
              color: "#000",
              fontWeight: 700,
              // marginTop: "30px",
              ":hover": {
                backgroundColor: "#f3ac2d",
                color: "#fff",
                fontFamily: "Arial",
                fontWeight: 700,
              },
            }}
          >
            Contactanos
          </Button>
        </div>
      </Box>

      {/* <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#dadfe0",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "50%",
          }}
        />

        <div style={{ fontSize: 24 }}>
          Estamos comprometidos en convertirnos en tu elección predilecta para
          encontrar soluciones profesionales de alta calidad
        </div>
        <Button sx={{ bgcolor: "orange" }}>Contactanos</Button>
      </Box>
  */}
      <Box
        sx={{
          //   marginBottom: "20px",
          justifyContent: "center",
          alignContent: "center",
          display: "grid",
          alignItems: "center",
          bgcolor: "#dadfe0",
        }}
      >
        {/* Footer  */}
        <img
          src={image}
          alt="footerImg"
          style={{
            width: "30%",
            marginLeft: "25%",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        />
        <div style={{ fontFamily: "Arial", fontWeight: 600, fontSize: 18 }}>
          +54 9 261 467 9214
        </div>
        <div
          style={{
            fontFamily: "Arial",
            fontWeight: 600,
            fontSize: 18,
            marginTop: "10px",
          }}
        >
          hola@sinCo2.com.ar
        </div>
        <div
          style={{
            fontFamily: "Arial",
            fontWeight: 600,
            fontSize: 18,
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Santiago del Estero 1200, Local 2, Godoy Cruz, Mendoza.
        </div>
      </Box>

      <Box sx={{ padding: "30px", bgcolor: "#1f1f1f", color: "#fff" }}>
        Copyright © 2024 | Aviso legal
      </Box>
    </Box>
  );
};

export default GetStarted;
