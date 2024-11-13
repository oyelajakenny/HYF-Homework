"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


function EpicImage() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${dateParam}?api_key=${API_KEY}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const image = data[0];
          const dateParts = image.date.split(" ")[0].split("-");
          const formattedDate = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
          const url = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${image.image}.png`;
          setImageUrl(url);
        } else {
          setError("No images available for the selected date.");
        }
      } catch (error) {
        setError("Failed to fetch the image.");
      } finally {
        setIsLoading(false);
      }
    };

    if (dateParam) {
      fetchImage();
    }
  }, [dateParam]);
  const date = "2023-07-15"; // Example date

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {imageUrl && <img src={imageUrl} alt={`EPIC image for ${dateParam}`} />}
    </div>
  );
}
export default EpicImage;

