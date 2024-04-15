"use client";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Spinner from "@/components/Spinner";
import { getSingleProperty } from "@/utils/requests";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

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

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} property={property} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2 " /> Back to Properties
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyPage;
