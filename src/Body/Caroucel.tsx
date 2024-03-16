import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Caroulcel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "50% 50%", padding: "10px" }}
    >
      <div style={{ display: "grid", gridColumn: "1" }}>
        Tu socio integral en servicios profesionales Ofrecemos Asesoramiento y
        <div>
          Servicio Profesional Contable, Jurídico, Seguros e Inversiones
          Inmobiliarias
        </div>
        <Button>CONTACTANOS</Button>
      </div>
      <div style={{ border: "1px solid", display: "grid", gridColumn: "2" }}>
        <div>
          Solicitá asesoramiento Contactanos y descubrí cómo INPROGROUP puede
          ayudarte a alcanzar tus metas financieras y trascender en tu éxito
          personal y empresarial.
        </div>
        <TextField label="Nombre" />
        <TextField label="Teléfono" />
        <TextField label="Email" />
        <div style={{ display: "flex" }}>
          <Checkbox /> <div>Contable</div>
          <Checkbox /> <div>Jurídico</div>
          <Checkbox /> <div>Seguros</div>
          <Checkbox /> <div>Propiedades</div>
        </div>
        <TextField label="Mensaje" />
        <Button>Enviar</Button>
      </div>

      <div
        style={{
          gridColumn: "1/-1",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "grid",
        }}
      >
        <div>Tu aliado al éxito</div>
        <div>
          Conjugamos la experiencia de profesionales altamente capacitados para
          brindar soluciones adaptadas a tus necesidades y las de tu empresa.
        </div>

        <div style={{ display: "flex" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
            <CardActions disableSpacing>
              <div>CONTABLE</div>
              <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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
      </div>

      <div>
        <div>Acerca de nosotros</div>
        <div>
          Somos un grupo de profesionales con experiencia que trabaja desde hace
          años en equipo. Nuestra misión es ser tu socio confiable en el ámbito
          de los servicios que ofrecemos, brindándote soluciones innovadoras e
          integrales y adaptadas a tus necesidades.
        </div>
        <Button>CONSULTANOS</Button>
      </div>

      {/* Footer */}

      <div>Santiago del Estero 1200, Local 2, Godoy Cruz, Mendoza.</div>
    </Box>
  );
};

export default Caroulcel;
