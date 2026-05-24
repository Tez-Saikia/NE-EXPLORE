import MnpDataImg from "../MnpImgs/MnpDataImg";

const ManipurPackages = [
{
    name: "Trek and Treat Offbeat",
    days: "5 days & 4 nights",
    image: [
        MnpDataImg[0],
        MnpDataImg[1],
        MnpDataImg[2],
        MnpDataImg[3]
    ],
    rating: 4.5,
    price: {
        original: "INR 10,999",
        discounted: "15,999"
    },
    id: "Trek and Treat Offbeat",
    route: "/Packages/Track & Treat"
},
{
    name: "Short Trip To Manipur",
    days: "4 days & 3 nights",
    image: [
        MnpDataImg[4],
        MnpDataImg[5],
        MnpDataImg[6],
        MnpDataImg[7]
    ],
    rating: 4.5,
    price: {
        original: "INR 3,999",
        discounted: "9,999"
    },
    id: "Short Trip To Manipur",
    route: "/Packages/Manipur Short-Trip"
},
{
    name: "Explore The Amazing Museums",
    days: "2 days & 1 nights",
    image: [
        MnpDataImg[8],
        MnpDataImg[9],
        MnpDataImg[10],
        MnpDataImg[11]
    ],
    rating: 4.5,
    price: {
        original: "INR 2,999",
        discounted: "5,000"
    },
    id: "Explore The Amazing Museums",
    route:"/Packages/Manipur Museum"
},
];
export default ManipurPackages;
