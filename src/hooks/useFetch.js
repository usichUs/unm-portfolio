import { useEffect, useState } from "react";

export default function useFetch({ url }) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("couldnt fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 5000);
  }, [url]);
  return { data, error, pending };
}
