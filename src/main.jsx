import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import Contact from './components/Contact/Contact';
import Explore from './components/Explore/Explore';
import Nagaland from './components/Packages/Nagaland/NglData/Nagaland';
import { ClerkProvider } from '@clerk/clerk-react';
import Sikkim from './components/Packages/Sikkim/SikkimData/Sikkim';
import Meghalaya from './components/Packages/Meghalaya/MglData/Meghalaya';
import Manipur from './components/Packages/Manipur/MnpData/Manipur';
import Mizoram from './components/Packages/Mizoram/MizData/Mizoram';
import Arunachal from './components/Packages/Arunachal/ApData/Arunachal';
import Assam from './components/Packages/Assam/AssamData/Assam';
import Tripura from './components/Packages/Tripura/TripuraData/Tripura';
import HornBill from './components/Packages/PackagesDetail/Nagaland/FirstPackage/HornBill';
import ShortTrip from './components/Packages/PackagesDetail/Nagaland/SecondPkg/ShortTrip';
import PrivateTour from './components/Packages/PackagesDetail/Nagaland/ThirdPackage/PrivateTour';
import DzukouValleyTrek from './components/Packages/PackagesDetail/Nagaland/FourthPackage/DzukouValleyTrek';
import KohimaPkg from './components/Packages/PackagesDetail/Nagaland/FifthPackage/KohimaPkg';
import WinterPackage from './components/Packages/PackagesDetail/Nagaland/SixthPackage/WinterPackage';
import ExclusiveSikkimTrip from './components/Packages/PackagesDetail/Sikkim/FirstPackage/ExclusiveSikkimTrip';
import SkmShortTrip from './components/Packages/PackagesDetail/Sikkim/SecondPackage/SkmShortTrip';
import NorthSikkim from './components/Packages/PackagesDetail/Sikkim/ThirdPackage/NorthSikkim';
import RomanticVication from './components/Packages/PackagesDetail/Sikkim/FourthPackage/RomanticVication';
import Gateway from './components/Packages/PackagesDetail/Sikkim/FifthPackage/Gateway';
import WondersOfSkm from './components/Packages/PackagesDetail/Sikkim/SixthPackage/WondersOfSkm';
import BestOFMl from './components/Packages/PackagesDetail/Meghalaya/FirstPackage/BestOFMl';
import MlLakes from './components/Packages/PackagesDetail/Meghalaya/SecondPackage/MlLakes';
import LightLoom from './components/Packages/PackagesDetail/Meghalaya/ThirdPackage/LightLoom';
import MlMuseum from './components/Packages/PackagesDetail/Meghalaya/FourthPackage/MlMuseum';
import MlWaterFall from './components/Packages/PackagesDetail/Meghalaya/FifthPackage/MlWaterFall';
import CleanestVillage from './components/Packages/PackagesDetail/Meghalaya/SixthPackage/CleanestVillage';
import MnpTreck from './components/Packages/PackagesDetail/Manipur/FirstPackage/MnpTreck';
import MnpShortTrip from './components/Packages/PackagesDetail/Manipur/SecondPackage/MnpShortTrip';
import MnpMuseum from './components/Packages/PackagesDetail/Manipur/ThirdPackage/MnpMuseum';
import MizDebotakhum from './components/Packages/PackagesDetail/Mizoram/FirstPackage/MizDebotakhum';
import MizMuseum from './components/Packages/PackagesDetail/Mizoram/SecondPackage/MizMuseum';
import MizSolomon from './components/Packages/PackagesDetail/Mizoram/ThirdPackage/MizSolomon';
import MizZokhua from './components/Packages/PackagesDetail/Mizoram/FouthPackage/MizZokhua';
import MizSailam from './components/Packages/PackagesDetail/Mizoram/FifthPackage/MizSailam';
import MizZawlpala from './components/Packages/PackagesDetail/Mizoram/SixthPackage/MizZawlpala';
import DiscoverAP from './components/Packages/PackagesDetail/ArunachalPradeshPackage/FirstPackage/DiscoverAP';
import NirvanaAndDirang from './components/Packages/PackagesDetail/ArunachalPradeshPackage/SecondPackage/NirvanaAndDirang';
import GemsOfAP from './components/Packages/PackagesDetail/ArunachalPradeshPackage/ThirdPackage/GemsOfAP';
import TrialsOfAp from './components/Packages/PackagesDetail/ArunachalPradeshPackage/FourthPackage/TrialsOfAp';
import ApHeighLights from './components/Packages/PackagesDetail/ArunachalPradeshPackage/FifthPackage/ApHeighLights';
import ZiroMusicFestival from './components/Packages/PackagesDetail/ArunachalPradeshPackage/SixthPackage/ZiroMusicFestival';
import Majuli from './components/Packages/PackagesDetail/Assam/FirstPackage/Majuli';
import Guwahati from './components/Packages/PackagesDetail/Assam/SecondPackage/Guwahati';
import WildLifeTour from './components/Packages/PackagesDetail/Assam/ThirdPackage/WildLifeTour';
import Nameri from './components/Packages/PackagesDetail/Assam/FourthPackage/Nameri';
import Haflong from './components/Packages/PackagesDetail/Assam/FifthPackage/Haflong';
import ManasTour from './components/Packages/PackagesDetail/Assam/SixthPackage/ManasTour';
import UjjayantaPalace from './components/Packages/PackagesDetail/Tripura/FirstPackage/UjjayantaPalace';
import JampuiHill from './components/Packages/PackagesDetail/Tripura/SecondPackage/JampuiHill';
import Unakoti from './components/Packages/PackagesDetail/Tripura/ThirdPackage/Unakoti';
import TermsAndConditions from './components/Footer/FooterLinks/TermsAndConditions';
import PrivacyPolicy from './components/Footer/FooterLinks/PrivacyPolicy';
import NglFirstPkg from './components/Packages/PackageBookings/NglPkg/NglFirstPkg';
import NglSecondPkg from './components/Packages/PackageBookings/NglPkg/NglSecondPkg';
import NglThirdPkg from './components/Packages/PackageBookings/NglPkg/NglThirdPkg';
import NglFourthPkg from './components/Packages/PackageBookings/NglPkg/NglFourthPkg';
import NglFifthPkg from './components/Packages/PackageBookings/NglPkg/NglFifthPkg';
import NglSixthPkg from './components/Packages/PackageBookings/NglPkg/NglSixthPkg';
import SkmFirstPkg from './components/Packages/PackageBookings/SikkimPkg/SkmFirstPkg';
import SkmSecondPkg from './components/Packages/PackageBookings/SikkimPkg/SkmSecondPkg';
import SkmThirdPkg from './components/Packages/PackageBookings/SikkimPkg/SkmThirdPkg';
import SkmFourthPkg from './components/Packages/PackageBookings/SikkimPkg/SkmFourthPkg';
import SkmFifthPkg from './components/Packages/PackageBookings/SikkimPkg/SkmFifthPkg';
import SkmSixthPkg from './components/Packages/PackageBookings/SikkimPkg/SkmSixthPkg';
import MglFIrstPkg from './components/Packages/PackageBookings/MglPkg/MglFIrstPkg';
import MglSecondPkg from './components/Packages/PackageBookings/MglPkg/MglSecondPkg';
import MglThirdPkg from './components/Packages/PackageBookings/MglPkg/MglThirdPkg';
import MglFourthPkg from './components/Packages/PackageBookings/MglPkg/MglFourthPkg';
import MglFifthPkg from './components/Packages/PackageBookings/MglPkg/MglFifthPkg';
import MglSixthPkg from './components/Packages/PackageBookings/MglPkg/MglSixthPkg';
import MnpFirstPkg from './components/Packages/PackageBookings/MnpPkg/MnpFirstPkg';
import MnpSecondPkg from './components/Packages/PackageBookings/MnpPkg/MnpSecondPkg';
import MnpThirdPkg from './components/Packages/PackageBookings/MnpPkg/MnpThirdPkg';
import MizFirstPkg from './components/Packages/PackageBookings/MizPkg/MizFirstPkg';
import MizSecondPkg from './components/Packages/PackageBookings/MizPkg/MizSecondPkg';
import MizThirdPkg from './components/Packages/PackageBookings/MizPkg/MizThirdPkg';
import MizFourthPkg from './components/Packages/PackageBookings/MizPkg/MizFourthPkg';
import MizFifthPkg from './components/Packages/PackageBookings/MizPkg/MizFifthPkg';
import MizSixthPkg from './components/Packages/PackageBookings/MizPkg/MizSixthPkg';
import ApFirstPkg from './components/Packages/PackageBookings/ApPkg/ApFirstPkg';
import ApSecondPkg from './components/Packages/PackageBookings/ApPkg/ApSecondPkg';
import ApThirdPkg from './components/Packages/PackageBookings/ApPkg/ApThirdPkg';
import APFourthPkg from './components/Packages/PackageBookings/ApPkg/APFourthPkg';
import ApFifthPkg from './components/Packages/PackageBookings/ApPkg/ApFifthPkg';
import ApSixthPkg from './components/Packages/PackageBookings/ApPkg/ApSixthPkg';
import AsmFirstPkg from './components/Packages/PackageBookings/AssamPkg/AsmFirstPkg';
import AsmSecondPkg from './components/Packages/PackageBookings/AssamPkg/AsmSecondPkg';
import AsmThirdPkg from './components/Packages/PackageBookings/AssamPkg/AsmThirdPkg';
import AsmFourthPkg from './components/Packages/PackageBookings/AssamPkg/AsmFourthPkg';
import AsmFifthPkg from './components/Packages/PackageBookings/AssamPkg/AsmFifthPkg';
import AsmSixthPkg from './components/Packages/PackageBookings/AssamPkg/AsmSixthPkg';
import TripFirstPkg from './components/Packages/PackageBookings/TripPkg/TripFirstPkg';
import TripSecondPkg from './components/Packages/PackageBookings/TripPkg/TripSecondPkg';
import TripThirdPkg from './components/Packages/PackageBookings/TripPkg/TripThirdPkg';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/Explore',
    element: <Explore />,
  },
  {
    path: '/Packages/Nagaland',
    element: <Nagaland />,
  },
  {
    path: '/Packages/Sikkim',
    element: <Sikkim />,
  },
  {
    path: '/Packages/Meghalaya',
    element: <Meghalaya />,
  },
  {
    path: '/Packages/Manipur',
    element: <Manipur />,
  },
  {
    path: '/Packages/Mizoram',
    element: <Mizoram />,
  },
  {
    path: '/Packages/Arunachal',
    element: <Arunachal />,
  },
  {
    path: '/Packages/Assam',
    element: <Assam />,
  },
  {
    path: '/Packages/Tripura',
    element: <Tripura />,
  },
  
  // Ngl Pkgs Details
  {
    path: "/Packages/Hornbill",
    element: <HornBill />, // New route for Hornbill Package
  },
  {
    path: "/Packages/ShortTrip",
    element: <ShortTrip/>
  },
  {
    path: "/Packages/PrivateTour",
    element: <PrivateTour/>
  },
  {
    path: "/Packages/DzukouValleyTrek",
    element: <DzukouValleyTrek/>
  },
  {
    path: "/Packages/KohimaPkg",
    element: <KohimaPkg/>
  },
  {
    path: "/Packages/WinterPackage",
    element:<WinterPackage/>
  },
  // Sikkim Pkg Details
  {
    path: "/Packages/ExclusiveSikkim",
    element:<ExclusiveSikkimTrip/>
  },
  {
    path: "/Packages/SkmShortTrip",
    element:<SkmShortTrip/>
  },
  {
    path: "/Packages/NorthSikkim",
    element:<NorthSikkim/>
  },
  {
    path: "/Packages/RomanticVication",
    element:<RomanticVication/>
  },
  {
    path: "/Packages/Gateway",
    element:<Gateway/>
  },
  {
    path: "/Packages/WondersOfSikkim",
    element:<WondersOfSkm/>
  },
  //Meghalaya Pkg Details
  {
    path: "/Packages/BestOfMeghalaya",
    element:<BestOFMl/>
  },
  {
    path: "/Packages/MeghalayaLakes",
    element:<MlLakes/>
  },
  {
    path: "/Packages/LightLoom",
    element:<LightLoom/>
  },
  {
    path: "/Packages/Museum",
    element:<MlMuseum/>
  },
  {
    path: "/Packages/WaterFall",
    element:<MlWaterFall/>
  },
  {
    path: "/Packages/Mesmerising Mawlynnong Village",
    element:<CleanestVillage/>
  },
  //Manipur Pkg Details
  {
    path: "/Packages/Track & Treat",
    element:<MnpTreck/>
  },
  {
    path: "/Packages/Manipur Short-Trip",
    element:<MnpShortTrip/>
  }, 
  {
    path: "/Packages/Manipur Museum",
    element:<MnpMuseum/>
  },
  //Mizoram Pkg Details
  {
    path: "/Packages/Explore Debotakhum",
    element:<MizDebotakhum/>
  },  
  {
    path: "/Packages/Mizoram Museum",
    element:<MizMuseum/>
  },
  {
    path: "/Packages/Mizoram Solomon's Temple",
    element:<MizSolomon/>
  },
  {
    path: "/Packages/Typical Mizo Village",
    element:<MizZokhua/>
  },
  {
    path: "/Packages/Sailam",
    element:<MizSailam/>
  },
  {
    path: "/Packages/Zawlpala Thlantlang Phulpui",
    element:<MizZawlpala/>
  },
  //Arunachal Pradesh Pkg Details
  {
    path: "/Packages/Discover Arunachal Pradesh",
    element:<DiscoverAP/>
  },
  {
    path: "/Packages/Nirvana with Dirang Sightseeing Tour",
    element:<NirvanaAndDirang/>
  },
  {
    path: "/Packages/Gems Of Arunachal Pradesh",
    element:<GemsOfAP/>
  },
  {
    path: "/Packages/Trials Of Arunachal Pradesh",
    element:<TrialsOfAp/>
  },
  {
    path: "/Packages/Heighlights Of Arunachal Pradesh",
    element:<ApHeighLights/>
  },
  {
    path: "/Packages/Ziro Music Festival",
    element:<ZiroMusicFestival/>
  },
  //Assam Pkg Details
  {
    path: "/Packages/Majestic Majuli",
    element:<Majuli/>
  },
  {
    path: "/Packages/Guwahati Tour Pack",
    element:<Guwahati/>
  },
  {
    path: "/Packages/NorthEast Wildlife Tour",
    element:<WildLifeTour/>
  },
  {
    path: "/Packages/Nameri Tour",
    element:<Nameri/>
  },
  {
    path: "/Packages/Beautiful Haflong Tour",
    element:<Haflong/>
  },
  {
    path: "/Packages/Manas National Park Tour",
    element:<ManasTour/>
  },
  //Tripura Pkg Details
  {
    path: "/Packages/Explore The Ujjayanta Palace",
    element:<UjjayantaPalace/>
  },
  {
    path: "/Packages/Jampui Hill Tour",
    element:<JampuiHill/>
  },
  {
    path: "/Packages/Magnificent Unakoti",
    element:<Unakoti/>
  },
  //Footer Section
  {
    path: "/Terms & Conditions",
    element:<TermsAndConditions/>
  },
  {
    path: "/Privacy & Policy",
    element:<PrivacyPolicy/>
  },
  //Ngl Pkg Booking Details
  {
    path: "/Packages/Nagaland/HornBill Package",
    element:<NglFirstPkg/>
  },
  {
    path: "/Packages/Nagaland/Short Trip Package",
    element:<NglSecondPkg/>
  },
  {
    path: "/Packages/Nagaland/Majestic Nagaland Private Tour",
    element:<NglThirdPkg/>
  },
  {
    path: "/Packages/Nagaland/Dzukou Valley Trek",
    element:<NglFourthPkg/>
  },
  {
    path: "/Packages/Nagaland/Explore The Beautiful Kohima",
    element:<NglFifthPkg/>
  },
  {
    path: "/Packages/Nagaland/Nagaland Winter Package",
    element:<NglSixthPkg/>
  },

  //Sikkim Pkg Booking Details
  {
    path: "/Packages/Sikkim/Exclusive Sikkim Trip",
    element:<SkmFirstPkg/>
  },
  {
    path: "/Packages/Sikkim/Short Trip To Sikkim",
    element:<SkmSecondPkg/>
  },
  {
    path: "/Packages/Sikkim/North Sikkim Wonders",
    element:<SkmThirdPkg/>
  },
  {
    path: "/Packages/Sikkim/Romantic Vication Package",
    element:<SkmFourthPkg/>
  },
  {
    path: "/Packages/Sikkim/Getaway to Sikkim",
    element:<SkmFifthPkg/>
  },
  {
    path: "/Packages/Sikkim/Wonders of Gangtok",
    element:<SkmSixthPkg/>
  },
  //Meghalaya Pkg Booking Details
  {
    path: "/Packages/Meghalaya/Best of Meghalaya",
    element:<MglFIrstPkg/>
  },
  {
    path: "/Packages/Meghalaya/Trails of Meghalaya Lakes",
    element:<MglSecondPkg/>
  },
  {
    path: "/Packages/Meghalaya/Laitlum Canyon Wonders",
    element:<MglThirdPkg/>
  },
  {
    path: "/Packages/Meghalaya/Meghalaya Museum Pack",
    element:<MglFourthPkg/>
  },
  {
    path: "/Packages/Meghalaya/Mystic Waterfalls",
    element:<MglFifthPkg/>
  },
  {
    path: "/Packages/Meghalaya/Mesmerising Mawlynnong Village",
    element:<MglSixthPkg/>
  },
  //Manipur Pkg Booking Details
  {
    path: "/Packages/Manipur/Trek and Treat Offbeat",
    element:<MnpFirstPkg/>
  },
  {
    path: "/Packages/Manipur/Short Trip To Manipur",
    element:<MnpSecondPkg/>
  },
  {
    path: "/Packages/Manipur/Explore The Amazing Museums",
    element:<MnpThirdPkg/>
  },
  //Mizoram Pkg Booking Details
  {
    path: "/Packages/Mizoram/Explore Debotakhum",
    element:<MizFirstPkg/>
  },
  {
    path: "/Packages/Mizoram/Mizoram State Museum",
    element:<MizSecondPkg/>
  },
  {
    path: "/Packages/Mizoram/Mizoram Solomon's Temple",
    element:<MizThirdPkg/>
  },
  {
    path: "/Packages/Mizoram/Zokhua - Typical Mizo Village",
    element:<MizFourthPkg/>
  },
  {
    path: "/Packages/Mizoram/Sailam",
    element:<MizFifthPkg/>
  },
  {
    path: "/Packages/Mizoram/Zawlpala Thlantlang Phulpui",
    element:<MizSixthPkg/>
  },
  //Arunachal Pradesh Pkg Booking Details
  {
    path: "/Packages/Arunachal Pradesh/Discover Arunachal Pradesh",
    element:<ApFirstPkg/>
  },
  {
    path: "/Packages/Arunachal Pradesh/Nirvana with Dirang Sightseeing",
    element:<ApSecondPkg/>
  },
  {
    path: "/Packages/Arunachal Pradesh/Gems Of Arunachal Pradesh",
    element:<ApThirdPkg/>
  },
  {
    path: "/Packages/Arunachal Pradesh/Trial Of Arunachal Pradesh",
    element:<APFourthPkg/>
  },
  {
    path: "/Packages/Arunachal Pradesh/HighLights Of Arunachal Pradesh",
    element:<ApFifthPkg/>
  },
  {
    path: "/Packages/Arunachal Pradesh/Ziro Music Festival",
    element:<ApSixthPkg/>
  },
  //Assam Pkg Booking Details
  {
    path: "/Packages/Assam/Majestic Majuli",
    element:<AsmFirstPkg/>
  },
  {
    path: "/Packages/Assam/Guwahati Tour",
    element:<AsmSecondPkg/>
  },
  {
    path: "/Packages/Assam/NorthEast Wildlife Tour",
    element:<AsmThirdPkg/>
  },
  {
    path: "/Packages/Assam/Nameri Tour",
    element:<AsmFourthPkg/>
  },
  {
    path: "/Packages/Assam/Haflong Tour",
    element:<AsmFifthPkg/>
  },
  {
    path: "/Packages/Assam/Manas National Park Tour",
    element:<AsmSixthPkg/>
  },
  //Tripura Pkg Booking Details
  {
    path: "/Packages/Tripura/The Ujjayanta Palace Tour",
    element:<TripFirstPkg/>
  },
  {
    path: "/Packages/Tripura/Jampui Hill Tour",
    element:<TripSecondPkg/>
  },
  {
    path: "/Packages/Tripura/Magnificent Unakoti",
    element:<TripThirdPkg/>
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
