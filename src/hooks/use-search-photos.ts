import { useCallback, useState } from "react";
import { Api } from "../utils";

export const useSearchPhotos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const searchPhotos = useCallback(async (name: string, earth_date: string) => {
    return Api.get(`/rovers/${name}/photos`, {
      params: {
        earth_date,
      },
    })
      .then(({ data }) => {
        setLoading(false);
        return data;
      })
      .catch((err) => {
        // May want to surface the error message at some point
        setError(err);
        setLoading(false);
      });
  }, []);

  return { searchPhotos, loading, error };
};
