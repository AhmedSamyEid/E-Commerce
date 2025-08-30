import Image from "next/image";
import { FaTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

const services = ["Bonus program", " Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"];
const assistance = ["Find an order", "Terms of delivery", " Exchange and return of goods", "Guarantee", "Frequently asked questions", "Terms of use of the site"];

export default function Footer() {
  return (
    <footer className="bg-black  items-center text-white py-10 px-6 sm:px-12">
      <div className="flex  flex-col sm:flex-row justify-between gap-6">
        <div>
          <Image src="/images/Logo-white.webp" alt="logo Cyber" width={90} height={40} />
          <p className="mt-5 leading-6">
            We are a residential interior design firm located in Portland. Our
            <br /> boutique-studio offers more than
          </p>
          <div className="flex mt-10 gap-7">
            <FaTwitter />
            <FaFacebook />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Services</h3>
          {services.map((service) => (
            <div key={service}>
              <ul>
                <li className="leading-10 text-[#cfcfcf] text-sm">{service}</li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold">Assistance</h3>
          {assistance.map((assist) => (
            <div key={assist}>
              <ul>
                <li className="leading-10 mb-1 text-[#cfcfcf] text-sm">{assist}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
