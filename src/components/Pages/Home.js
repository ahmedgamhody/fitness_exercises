import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../HeroBanner";
import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";
export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}
