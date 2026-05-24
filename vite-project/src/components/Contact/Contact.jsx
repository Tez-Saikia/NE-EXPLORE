import React from "react";
import ContactImg from "./imgs/contactImg.jpg";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import ConatctNav from "./ConatctNav";
import ContactFooter from "./ContactFooter";
import ContactForm from "./ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Contact() {
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2604884.9232891663!2d89.62893827777994!3d25.620760940977625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374f651182a461ab%3A0xd8b5c2e1f67bebf0!2sNortheast%20India!5e0!3m2!1sen!2sin!4v1732035361032!5m2!1sen!2sin"
  );
  const [selectedState, setSelectedState] = useState(null); // Track the active link

  // Map URLs for each state
  const locations = {
    Nagaland:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285723.3486063744!2d94.2548710624007!3d26.15843686080896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37501f354d09b6cd%3A0xc0d10b1c93b93390!2sNagaland!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    Sikkim:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1910086.582799487!2d88.30930808485933!3d27.533558297114946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4a3c5947ed5d7%3A0x29c4b0b9cfb1cb2d!2sSikkim!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    Meghalaya:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1303011.2046598312!2d91.37401183191464!3d25.604049083598892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375077b38c87cf51%3A0x66565721262eec6e!2sMeghalaya!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    Manipur:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271217.446763846!2d93.77053896158793!3d24.74522712484716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374942b7dbe8022f%3A0x9196ad19a1ef3df9!2sManipur!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    Mizoram:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251100.7279123035!2d92.49722500251065!3d23.25943308780507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374fd8f382abde4b%3A0xc49c11d21ef914a2!2sMizoram!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    "Arunachal Pradesh":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599397.4723193173!2d92.36456896336302!3d27.70801937830692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eec011d1399b1%3A0x6a9f67026325770b!2sArunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    Assam:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536072.061879914!2d91.34781746372479!3d26.199054862946923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375abc06fbb92e6b%3A0x22f59d86dbddad55!2sAssam!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
    Tripura:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1265543.2920663433!2d91.2464254428751!3d23.793878275666514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37414c1d0bdc8077%3A0x611b9ffab9897327!2sTripura!5e0!3m2!1sen!2sin!4v1732038361032!5m2!1sen!2sin",
  };

  return (
    <div className="bg-blue-200 min-h-screen flex flex-col h-full">  
      {/* Nav Section */}
      <ConatctNav />
  
      {/* Logo Section */}
     <img className="absolute w-32 h-auto pt-8 pl-4 z-30" src={Logo} alt="" />

      {/* Image Section */}
      <div>
        <img
          className="w-[53rem] h-[49rem] ml-[41.9rem] mt-[20rem]"
          src={ContactImg}
          alt=""
        />
        <h1
          className="absolute z-[999] w-[77.8rem] mt-[-40rem] ml-[3rem] text-[20.1rem] font-extrabold"
          style={{
            fontFamily: "Lalezar",
            lineHeight: "normal",
            background:
              "linear-gradient(270deg, #F6F6F6 49.99%, #0030DF 49.99%, #2907CF 63%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact
        </h1>
      </div>

      {/* Map Section */}
      <div className="ml-[8rem] mt-[-8rem]">
        <h1
          className="text-wrap text-[#3109FF] text-[1.5rem] font-normal leading-normal"
          style={{ fontFamily: "sans-serif" }}
        >
          <strong>A question?</strong> Our dedicated team
        </h1>
        <h1
          className="text-wrap text-[#3109FF] text-[1.5rem] font-normal leading-normal"
          style={{ fontFamily: "sans-serif" }}
        >
          is here to advise and help you
        </h1>
      </div>

      <h1
        className="text-[#2908CF] text-[4rem] mt-[8rem] ml-[23rem] font-extrabold"
        style={{ fontFamily: "Lalezar" }}
      >
        North East Tourism
      </h1>

      <div className="ml-[8rem]">
        <div className="mt-8 ml-[73rem] flex flex-col absolute gap-[2rem]">
          {Object.keys(locations).map((state) => (
            <a
              key={state}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMapSrc(locations[state]);
                setSelectedState(state);
              }}
              className={`mr-4 ${
                selectedState === state ? "underline font-bold" : ""
              } text-blue-500`}
            >
              {state}
              <FaLocationDot className="ml-[-1.2rem] mt-[-1.2rem]" />
            </a>
          ))}
        </div>
        <iframe
          src={mapSrc}
          className="mt-[2rem] shadow-2xl"
          width="1000"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Accordion Section */}
      <div className="flex justify-center items-center h-auto relative z-[1000]">
        <div className="w-[69rem] p-8 bg-[#f6f9fc] mt-[11rem] rounded-lg shadow-2xl">
          <Accordion type="single" collapsible className="w-full">
            {/* Accordion Items */}
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-blue-600 text-[1.1rem] text-center">
                  Why Book Holidays with Explore-NorthEast?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Explore-NorthEast.com, India's leading online North-East
                  travel company, has a profound understanding of Indian
                  consumers travel needs and preferences. It offers a wide range
                  of holiday packages in North-East,India. While the dynamic or
                  customized tour and travel packages give consumers an option
                  to create and design their own holiday, the fixed departure
                  holiday packages have a pre-designed itinerary; thus ensuring
                  there is something to meet the holiday needs of every kind of
                  traveller.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h1 className="text-blue-600 text-[1.1rem]">
                  What does Explore-NorthEast Holidays offer?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  Explore-NorthEast offers a hassle-free holiday wherein all
                  your travel needs are taken care of. Be it your accommodation
                  in comfortable hotels, convenient transfers, varied
                  sightseeing options and an array of activities to choose from,
                  delectable meals and niche experiences - the holiday packages
                  are designed such to offer you an unparalleled experience. Be
                  it popular North-East destinations such as Sikkim, Arunachal
                  Pradesh, or more offbeat of North East, India. From
                  distinctive honeymoon packages to exclusive tour packages for
                  women, from itineraries designed for solo travellers, families
                  with kids and for those who are young at heart -
                  Explore-NorthEast has an answer to all our holiday needs.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h1 className="text-blue-600 text-[1.1rem]">
                  How to book Holidays with Explore-NorthEast?
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The user-friendly Explore-NorthEast website make it easy for
                  enthusiastic travellers to plan and book a holiday simply at
                  the click of a button. Just select the city within North East
                  you want to visit along with your travel dates, travel
                  duration, specific preferences, if any, on hotels, kind of
                  holiday, etc. and Explore-NorthEast offers you an extensive
                  list of holiday packages to choose from. Pick any package that
                  meets your needs. Else, you could also choose hotels of your
                  choice, add sightseeing and activities to your list and have a
                  package ready that best suits your requirement. You can choose
                  to book your tour packages offline by dropping a query or
                  chatting with our travel experts for immediate support. With
                  Explore-NorthEast, planning and buying your ideal holiday has
                  never been easier.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h1 className="text-blue-600 text-[1.1rem]">
                  The Ultimate Guide to Holidaying in North East, India
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  1. <strong>Sikkim:</strong> Situated in the Himalayas, Sikkim
                  is a jewel in North East India's treasury. Sikkim tour
                  packages offer breathtaking vistas, warm monasteries like
                  Rumtek, and the enchanting Tsomgo Lake. Adventure enthusiasts
                  can revel in trekking to Goechala or Pelling. Sikkim's unique
                  blend of culture and nature makes it a must-visit destination
                  in North East India.
                </p>
                <br />
                <p>
                  2. <strong>Meghalaya:</strong> Known as the 'Abode of Clouds',
                  Meghalaya is a paradise for nature lovers. Its capital,
                  Shillong, exudes colonial charm, while Cherrapunji and
                  Mawsynram - the wettest places on Earth - boast lush green
                  landscapes and spectacular waterfalls. Living root bridge,
                  bamboo trails, the Dawki Lake, and the cleanest village of
                  Mawlynnong, are highlights of our Meghalaya tour packages.
                </p>
                <br />
                <p>
                  3. <strong>Assam:</strong> Assam, the gateway to North East
                  India, is renowned for its tea gardens, Brahmaputra River, and
                  rich biodiversity. Kaziranga National Park, home to the
                  one-horned rhinoceros, is a UNESCO World Heritage site.
                  Assam's cultural festivals, river cruises, and historic
                  temples like Kamakkha make it a key inclusion in
                  Thrillophilia’s holiday packages for Assam.
                </p>
                <br />
                <p>
                  4. <strong>Manipur:</strong> Known for its natural beauty and
                  rich history, Manipur offers a tranquil escape. The floating
                  islands on Loktak Lake, the only floating national park in the
                  world, are a unique feature to witness while touring Manipur.
                  The state's classical dance forms and the historic Kangla Fort
                  are integral to the cultural experience of North East India
                  and are perfectly curated in Thrillophilia’s Manipur tour
                  packages.
                </p>
                <br />
                <p>
                  5. <strong>Nagaland:</strong> Nagaland is a mosaic of
                  indigenous cultures. The Hornbill Festival showcases its rich
                  tribal heritage. Dzükou Valley offers stunning landscapes and
                  amazing trekking experiences. With Thrillophilia’s Nagaland
                  tour packages experience the vibrant handlooms, handicrafts,
                  and warm hospitality of this intriguing destination.
                </p>
                <br />
                <p>
                  6. <strong>Arunachal Pradesh:</strong> Arunachal Pradesh, the
                  'Land of the Dawn-lit Mountains', is a haven for adventurers
                  and nature enthusiasts. Tawang Monastery, the largest in
                  India, and the serene beauty of Ziro Valley are the highlights
                  of this destination which are perfectly curated in our
                  Arunachal Pradesh tour packages. The state's diverse flora and
                  fauna, along with the unique tribal cultures, make it an
                  unmissable part of any North East adventure.
                </p>
                <br />
                <p>
                  7. <strong>Mizoram:</strong> Mizoram, often called the "Land
                  of the Hill People," is a picturesque state with rolling
                  hills, lush forests, and vibrant culture. The capital city,
                  Aizawl, offers stunning views of the surrounding hills and
                  valleys. A highlight of Mizoram tour packages is the
                  breathtaking Vantawng Falls, the highest waterfall in the
                  state. For nature enthusiasts, Phawngpui (Blue Mountain) is a
                  must-visit, providing panoramic views of the landscape.
                  Mizoram's rich tribal heritage, celebrated during festivals
                  like Chapchar Kut, adds a unique cultural charm to its natural
                  beauty.
                </p>
                <br />
                <p>
                  8. <strong>Tripura:</strong> Tripura, a land of history and
                  heritage, is a treasure trove for explorers. The magnificent
                  Ujjayanta Palace, built during the reign of the Manikya kings,
                  showcases stunning architecture. Neermahal, a stunning lake
                  palace, reflects Tripura's royal past. The Unakoti Hills,
                  adorned with ancient rock carvings and sculptures, are a major
                  attraction for history buffs. Nature lovers can explore
                  Sepahijala Wildlife Sanctuary or the tranquil landscapes of
                  Dumboor Lake. Tripura's rich tapestry of tribal culture and
                  vibrant festivals like Kharchi Puja make it a captivating
                  destination in North East India.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Contact Section */}
      <h1
        className="text-[#2908CF] text-[4rem] mt-[9rem]  ml-[34rem] font-extrabold"
        style={{ fontFamily: "Lalezar" }}
      >
        Contact Form
      </h1>

      <ContactForm/>
      {/* Footer Section */}
      <ContactFooter/>
    </div>
  );
}

export default Contact;
