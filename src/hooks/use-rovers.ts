import { useEffect, useState } from "react";
import type { Rover } from "../types";
import { Api } from "../utils";

export const useRovers = () => {
  const [rovers, setRovers] = useState<Rover[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    Api.get("/rovers")
      .then(({ data }) => {
        setRovers(data.rovers);
        setLoading(false);
      })
      .catch((err) => {
        // May want to surface the error message at some point
        setError(err);
        setLoading(false);
      });
  }, []);

  return { rovers, loading, error };
};
