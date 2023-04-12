import { NextApiRequest, NextApiResponse } from "next";

type WeatherData = {
  temperature: number;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData | { error: string }>
) {
  const { location } = req.query;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const response = await fetch(apiUrl); 

  if (!response.ok) {
    res.status(500).json({ error: "Failed to fetch weather data" });
    return;
  }

  const data = await response.json();
  const weather: WeatherData = {
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
  };

  res.status(200).json(weather);
}
