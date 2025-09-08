import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

export default function Infobox({ info }) {
  const cold_url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hot_url = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const rain_url = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  
  let weatherImage = info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url;
  let weatherIcon = info.humidity > 80 ? <UmbrellaIcon fontSize="large" /> : info.temp > 15 ? <WbSunnyIcon fontSize="large" /> : <AcUnitIcon fontSize="large" />;
  
  return (
    <div className="InfoBox" style={{ textAlign: "center", marginTop: "25px" }}>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={weatherImage} title="Weather Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.City} {weatherIcon}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>
                The weather is described as {info.weather} and feels like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}