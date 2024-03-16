// import React from "react";
// import Caroulcel from "./Caroucel";

// const Body = () => {
//   return (
//     <div>
//       <Caroulcel />
//     </div>
//   );
// };

// export default Body;

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  styled,
  TextField,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom";
//img
// import headerImg from "../assets/pexels-binyamin-mellish-186078.png";
import image from "../Components/image.png";
import Laptop from "../Components/Laptop.png";
import Caroulcel from "./Caroucel";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "orange",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <>
      <Box>
        <img
          src={Laptop}
          alt="headerImg"
          style={{
            width: "100%",
            height: "100%",
            // marginBottom: -15,
            // background:
            //   "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "600px",
            padding: 50,
            top: 250,
            right: 100,
            display: "grid",
            gridColumn: "2",
            backgroundColor: "#3c3c3b",
            color: "#000",
          }}
        >
          <div
            style={{
              fontSize: 35,
              fontFamily: "Arial",
              fontWeight: 700,
              color: "#fff",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Solicitá asesoramiento
          </div>
          <div
            style={{
              fontSize: 20,
              fontFamily: "Arial",
              fontWeight: 600,
              color: "#fff",
              justifyContent: "center",
              display: "flex",
              marginTop: "10px",
            }}
          >
            Contactanos y descubrí cómo INPROGROUP puede ayudarte a alcanzar tus
            metas financieras y trascender en tu éxito personal y empresarial.
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <TextField
              label="Nombre"
              sx={{
                width: "300px",
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiInput-input": { color: "#fff" },
                "& .MuiInput-root::before": { borderBottom: "1px solid #fff" },
              }}
              variant="standard"
            />
            <TextField
              label="Teléfono"
              sx={{
                width: "300px",
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiInput-input": { color: "#fff" },
                "& .MuiInput-root::before": { borderBottom: "1px solid #fff" },
              }}
              variant="standard"
            />
          </div>
          <TextField
            label="Email"
            variant="standard"
            sx={{
              marginTop: "10px",
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiInput-input": { color: "#fff" },
              "& .MuiInput-root::before": { borderBottom: "1px solid #fff" },
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
              fontSize: 18,
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                alignItems: "center",
              }}
            >
              Tipo de Consulta
            </div>
            <div />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { color: "#fff" },
                }}
              />
              <div>Contable</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                alignItems: "center",
              }}
            >
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { color: "#fff" },
                }}
              />{" "}
              <div>Jurídico</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                alignItems: "center",
              }}
            >
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { color: "#fff" },
                }}
              />{" "}
              <div>Seguros</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                alignItems: "center",
              }}
            >
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { color: "#fff" },
                }}
              />{" "}
              <div>Propiedades</div>
            </div>
          </div>
          <TextField
            label="Mensaje"
            variant="standard"
            sx={{
              marginTop: "20px",
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiInput-input": { color: "#fff" },
              "& .MuiInput-root::before": { borderBottom: "1px solid #fff" },
            }}
          />
          <Button
            sx={{
              marginTop: "30px",
              marginLeft: "250px",
              width: "100px",
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
            Enviar
          </Button>
        </div>

        <div
          style={{
            position: "absolute",
            width: "700px",
            top: 300,
            left: 100,
            display: "grid",
            gridColumn: "2",
          }}
        >
          <div
            style={{
              fontSize: 50,
              fontFamily: "Arial",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Tu socio integral en servicios profesionales
          </div>
          <div
            style={{
              fontSize: 25,
              fontFamily: "Arial",
              fontWeight: 700,
              color: "#fff",
              marginTop: "30px",
            }}
          >
            Contactanos y descubrí cómo INPROGROUP puede ayudarte a alcanzar tus
            metas financieras y trascender en tu éxito personal y empresarial.
          </div>
          <Button
            sx={{
              bgcolor: "#e9e025",
              width: 250,
              fontFamily: "Arial",
              color: "#000",
              fontSize: 15,
              fontWeight: 700,
              marginTop: "30px",
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
    </>
  );
};

export default Header;
