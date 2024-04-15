"use client";
import { getSingleProperty } from "@/utils/requests";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const property = await getSingleProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("Erorr fetching property", error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchData();
    }
  }, [id, property]);

  return <div>PropertyPage</div>;
};

export default PropertyPage;
