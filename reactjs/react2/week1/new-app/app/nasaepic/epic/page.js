
"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const NASA_EPIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const EpicImage = () => {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const { date } = router.query;
      setDate(date);

      if (date) {
        fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${NASA_EPIC_API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data && data.length > 0) {
              const image = data[0];
              const dateParts = image.date.split(" ")[0].split("-");
              const formattedDate = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
              const url = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${image.image}.png`;
              setImageUrl(url);
            }
          })
          .catch((err) => console.error(err));
      }
    }
  }, [router.isReady, router.query]);

 

  return (
    <div>
      <Navbar />
      {imageUrl ? (
        <img src={imageUrl} alt={`EPIC image for ${date}`} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EpicImage;