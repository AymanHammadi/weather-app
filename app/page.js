import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CloudIcon from "@mui/icons-material/Cloud";

export default function Home() {
  return (
    <>
      <Container
        maxWidth="xl"
        className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#705C53] to-[#3B3030]">
        <Card sx={{ minWidth: 275 }} className="bg-[#FFF8E8]">
          <CardContent>
            {/* City and Date */}

            <Box>
              <Typography
                variant="h1"
                component="div"
                className="text-[#4A4947]">
                Istanbul, Turkey
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                16 September 2021 12:00 AM
              </Typography>
            </Box>
            <hr className="border-[#254336] w-full h-1 my-4" />

            {/* Weather Icon And Details*/}

            <Box className="flex justify-between">
              {/* Icon */}
              <Box className="">
                <CloudIcon
                  sx={{ fontSize: 100 }}
                  className="text-[#4A4947] text-[230px]"
                />

                {/* Temperature */}
              </Box>
              <Box className="flex flex-row justify-center items-center">
                <h1 className="text-[#000] text-9xl">25</h1>
                <Typography variant="h2" component="div">
                  °C
                </Typography>
              </Box>
            </Box>
            <hr className="border-[#254336] w-full h-1 my-4" />

            {/* Weather Details */}
            <Box className="flex justify-between">
              <Box>
                <Typography
                  variant="h3"
                  component="div"
                  className="text-[#000]">
                  Humidity
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  72%
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  component="div"
                  className="text-[#000]">
                  Wind
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  7 km/h
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  component="div"
                  className="text-[#000]">
                  Visibility
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  10 km
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small">عربي</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
