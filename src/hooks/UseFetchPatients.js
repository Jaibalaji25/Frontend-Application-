import { useState, useEffect } from "react";

export default function UseFetchPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error("Error fetching patients:", err));
  }, []);

  return [patients, setPatients];
}
