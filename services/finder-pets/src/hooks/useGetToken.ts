import { getLocalToken } from "@/utils/localToken";
import { useEffect, useState } from "react";

const useGetToken = () => {
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      const localToken = getLocalToken();
      if (localToken) {
        setToken(localToken);
      } else {
        setToken("");
      }
    } catch (err) {
      setError("Failed to get token");
    } finally {
      setLoading(false);
    }
  }, []);

  return { token, loading, error };
};

export default useGetToken;
