import NglDataImg from "../DataImages/NglDataImg";

const travelPackages = [
  {
    name: "Hornbill Festival Package",
    days: "12 days & 11 nights",
    image: [
      NglDataImg.Hornbill,
      NglDataImg.Hornbill2,
      NglDataImg.Hornbill3,
      NglDataImg.Hornbill4,
    ],
    rating: 4.5,
    price: {
      original: "INR 41,999",
      discounted: "55,999",
    },
    id: "hornbill", // Updated unique ID for Hornbill Package
    route: "/Packages/Hornbill", // Added route for direct navigation
  },
  {
    name: "Short Trip to Nagaland",
    days: "4 days & 3 nights",
    image: [
      NglDataImg.shortTrip,
      NglDataImg.shortTrip2,
      NglDataImg.shortTrip3,
      NglDataImg.shortTrip4,
    ],
    rating: 4.5,
    price: {
      original: "INR 15,999",
      discounted: "20,999",
    },
    id: "short-trip",
    route:"/Packages/ShortTrip", // Updated unique ID
  },
  {
    name: "Majestic Nagaland Private Tour",
    days: "6 days & 5 nights",
    image: [
      NglDataImg.Village,
      NglDataImg.Village2,
      NglDataImg.Village3,
      NglDataImg.Village4,
    ],
    rating: 4.5,
    price: {
      original: "INR 24,999",
      discounted: "30,999",
    },
    id: "privateTour",
    route: "/Packages/PrivateTour", // Updated unique ID
  },
  {
    name: "Dzukou Valley Trek, Nagaland",
    days: "7 days & 6 nights",
    image: [
      NglDataImg.camp,
      NglDataImg.camp2,
      NglDataImg.camp3,
      NglDataImg.camp4,
    ],
    rating: 4.5,
    price: {
      original: "INR 28,999",
      discounted: "45,999",
    },
    id: "dzukou-valley", 
    route: "/Packages/DzukouValleyTrek", 
  },
  {
    name: "Explore The Beautiful Kohima",
    days: "8 days & 7 nights",
    image: [
      NglDataImg.Kohima,
      NglDataImg.Kohima2,
      NglDataImg.Kohima3,
      NglDataImg.Kohima4,
    ],
    rating: 4.5,
    price: {
      original: "INR 35,999",
      discounted: "50,999",
    },
    id: "kohima", 
    route: "/Packages/KohimaPkg",
  },
  {
    name: "Nagaland Winter Package",
    days: "9 days & 8 nights",
    image: [
      NglDataImg.winter,
      NglDataImg.winter2,
      NglDataImg.winter3,
      NglDataImg.winter4,
    ],
    rating: 4.5,
    price: {
      original: "INR 45,999",
      discounted: "66,999",
    },
    id: "winter-package", 
    route: "/Packages/WinterPackage",
  },
];

export default travelPackages;
