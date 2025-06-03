import { useEffect, useState } from "react";

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setErr(e))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, err };
};

export default useProducts;
