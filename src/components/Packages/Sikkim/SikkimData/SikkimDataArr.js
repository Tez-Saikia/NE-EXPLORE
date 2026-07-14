import SikkimDataImg from "../DataImgs/SikkimDataImg";

const SikkimPackages = [
      {
        name: "Exclusive Sikkim Trip",
        days: "10 days & 9 nights",
        image: [
          SikkimDataImg.exclusive1,
          SikkimDataImg.exclusive2,
          SikkimDataImg.exclusive3,
          SikkimDataImg.exclusive4,
    
        ],
        rating: 4.5,
        price: {
          original: "INR 43,999",
          discounted: "55,999"
        },
        id: "Exclusive Sikkim Trip",
        route:"/Packages/ExclusiveSikkim"
      },
      {
        name: "Short Trip to Sikkim",
        days: "4 days & 3 nights",
        image:[
          SikkimDataImg.skShort1,
          SikkimDataImg.skShort2,
          SikkimDataImg.skShort3,
          SikkimDataImg.skShort4
        ],
        rating: 4.5,
        price: {
          original: "INR 17,999",
          discounted: "20,999"
        },
        id: "short Trip to Sikkim",
        route:"/Packages/SkmShortTrip"
      },
      {
        name: "North Sikkim Wonders",
        days: "7 days & 6 nights",
        image:[
          SikkimDataImg.sKWonder1,
          SikkimDataImg.sKWonder2,
          SikkimDataImg.sKWonder3,
          SikkimDataImg.sKWonder4
        ],
        rating: 4.5,
        price: {
          original: "INR 18,999",
          discounted: "25,999"
        },
        id: "North Sikkim Wonders",
        route:"/Packages/NorthSikkim"
      },
      {
        name: "Romantic Vacation in Sikkim",
        days: "8 days & 7 nights",
        image:[
          SikkimDataImg.romantic1,
          SikkimDataImg.romantic2,
          SikkimDataImg.romantic3,
          SikkimDataImg.romantic4
        ],
        rating: 4.5,
        price: {
          original: "INR 28,999",
          discounted: "55,999"
        },
        id: "Romantic Vication",
        route:"/Packages/RomanticVication",
      },
      {
        name: "Getaway to Sikkim",
        days: "6 days & 5 nights",
        image:[
          SikkimDataImg.gateway1,
          SikkimDataImg.gateway2,
          SikkimDataImg.gateway3,
          SikkimDataImg.gateway4
        ],
        rating: 4.5,
        price: {
          original: "INR 20,999",
          discounted: "24,999"
        },
        id: "Getaway to Sikkim",
        route:"/Packages/Gateway" 
      },
      {
        name: "Wonders of Gangtok",
        days: "9 days & 8 nights",
        image:[
          SikkimDataImg.gangtok1,
          SikkimDataImg.gangtok2,
          SikkimDataImg.gangtok3,
          SikkimDataImg.gangtok4
        ],
        rating: 4.5,
        price: {
          original: "INR 29,999",
          discounted: "56,999"
        },
        id: "Wonders of Gangtok",
        route:"/Packages/WondersOfSikkim"
      }
]

export default SikkimPackages;