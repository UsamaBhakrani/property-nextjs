import Image from "next/image";
import Link from "next/link";
import PropertyDetails from "./PropertyDetails";
import ContactForm from "./ContactForm";

const PropertyHeaderImage = ({ image, property }) => {
  return (
    <>
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={`/images/properties/${image}`}
              alt=""
              className="object-cover h-[400px]"
              width={0}
              sizes="100"
              height={0}
              priority={true}
            />
          </div>
        </div>
      </section>
    

      {/* <!-- Property Info --> */}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-1 w-full gap-6">
            <PropertyDetails property={property} />
            {/* <!-- Sidebar --> */}
            <aside className="space-y-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                <i className="fas fa-bookmark mr-2"></i> Bookmark Property
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                <i className="fas fa-share mr-2"></i> Share Property
              </button>
              <ContactForm />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyHeaderImage;
