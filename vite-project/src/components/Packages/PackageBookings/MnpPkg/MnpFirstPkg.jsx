import React, { useState, useEffect } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/logo.png"
import Nav from "../../../Header/Nav";
import PkgBookingFooter from "../PkgBookingFooter";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function MnpFirstPkg() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const adultPrice = 10999;
  const childPrice = 250;

  const totalAdultPrice = adultPrice * adultCount;
  const totalChildPrice = childPrice * childCount;
  const grandTotal = totalAdultPrice + totalChildPrice;

  const handleDecrease = (setCount, count) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = (setCount, count) => {
    setCount(count + 1);
  };

  const PaymentModal = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [error, setError] = useState("");

    const validatePayment = () => {
      const cardNumberRegex = /^\d{16}$/;
      const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      const cvvRegex = /^\d{3,4}$/;

      const [month, year] = expiryDate.split("/").map(Number);
      const now = new Date();
      const expiryDateValid =
        month && year && new Date(`20${year}`, month - 1) > now;

      if (!cardNumberRegex.test(cardNumber)) {
        setError("Invalid card number. It must be 16 digits.");
        return false;
      }
      if (!expiryDateRegex.test(expiryDate) || !expiryDateValid) {
        setError(
          "Invalid expiry date. Use MM/YY and ensure it is in the future."
        );
        return false;
      }
      if (!cvvRegex.test(cvv)) {
        setError("Invalid CVV. It must be 3 or 4 digits.");
        return false;
      }

      setError(""); // Clear any previous error
      return true;
    };

    const handlePayment = async () => {
      // Check if all required fields are filled (name, email, address, phone, and date)
      if (!name || !email || !address || !phone || !date) {
        alert(
          "Please fill out all the required fields (Name, Email, Address, Phone, and Date)."
        );
        return; // Stop further execution if any field is empty
      }

      // Name validation (at least 3 characters)
      if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return;
      }

      // Email validation (must contain @)
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Phone number validation (exactly 10 digits)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
      }

      // If payment validation is successful, proceed with payment
      if (validatePayment()) {
        setIsPaymentModalOpen(false);
        alert("Payment Successful!");

        // Send payment data to Firebase
        const paymentData = {
          name,
          email,
          phone,
          address,
          totalAmount: grandTotal,
          paymentStatus: "success", // Store the payment status
          date: format(date, "dd/MM/yy"), // Format the date for storage
        };

        try {
          const response = await fetch(
            "https://explore-northeast-default-rtdb.firebaseio.com/payments.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(paymentData),
            }
          );

          if (!response.ok) {
            throw new Error(
              `Failed to store payment data: ${response.statusText}`
            );
          }

          const responseData = await response.json();
          console.log("Payment data saved to Firebase:", responseData);

          // Clear the form inputs after successful payment submission
          setName("");
          setEmail("");
          setPhone("");
          setAddress("");
          setDate(null);
          setAdultCount(1);
          setChildCount(0);
        } catch (error) {
          console.error("Error submitting payment data:", error);
          alert("Failed to store payment data. Please try again.");
        }
      }
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsPaymentModalOpen(false)}
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-4">Payment</h2>

          {/* Error Message */}
          {error && (
            <div className="mb-4 text-red-500 text-sm">
              <strong>Error:</strong> {error}
            </div>
          )}

          {/* Card Details */}
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-lg font-semibold mb-2"
            >
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 1234 1234 1234"
              maxLength="16"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label
                htmlFor="expiryDate"
                className="block text-lg font-semibold mb-2"
              >
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-lg font-semibold mb-2">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                placeholder="CVC"
                maxLength="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          {/* Pay Now Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            onClick={handlePayment}
          >
            Pay Now ₹{grandTotal}
          </button>

          <h2 className="ml-24 mt-4 text-gray-500">This is a dummy payment</h2>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(
          "https://explore-northeast-default-rtdb.firebaseio.com/payments.json"
        );
        const data = await response.json();

        // Assuming `data` is an array of payment objects
        const paymentData = data[0]; // For example, taking the first payment
        const formattedDate = format(new Date(paymentData.date), "dd/MM/yy");

        console.log(formattedDate); // This will log the date in "dd/MM/yy" format
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPaymentData();
  }, []);

  return (
    <div className="relative w-full h-[224vh] bg-neutral-300">
      {/* Nav Section */}
      <div className="relative z-50">
        <Nav />
      </div>
      {/* Logo Section */}
      <img
        className="absolute w-32 h-auto pt-8 pl-4 ml-[2rem] z-40"
        src={Logo}
        alt=""
      />
      {/* Top Section */}
      <div className="absolute inset-x-0 top-0 h-80 bg-blue-950" />
      <div className="absolute w-[60rem] h-[81rem] left-20 top-[14rem] bg-white rounded-xl shadow-xl">
        <div className="w-full h-80 rounded-t-xl bg-[#DDEDF1]">
          <h2 className="text-black text-[2rem] pt-4 px-8 font-normal leading-normal font-sans">
            Package Details
          </h2>
          <h1 className="text-[#01F] text-[4rem] font-extrabold px-8 leading-normal font-sans">
            Trek & Treat Offbeat
          </h1>
          <div>
            <CiClock1 className="text-black text-[2rem] mt-7 ml-8 font-normal leading-normal" />
            <h1 className="text-[#2A2A2A] text-[2rem] font-bold ml-20 -mt-[2.6rem] leading-normal">
              Duration:{" "}
              <span className="text-orange-700">5 days & 4 nights</span>
            </h1>

            <FaLocationDot className="text-red-700 text-[2rem] mt-7 ml-8 font-normal leading-normal" />
            <h1 className="text-[#2A2A2A] text-[2rem] font-bold ml-20 -mt-[2.6rem] leading-normal">
              Destination: <span className="text-orange-700">Manipur</span>
            </h1>
          </div>
          <div className="w-full h-[7rem] mt-[1.6rem] bg-[#F5FAFC] shadow-lg">
            <h1 className="text-[#2A2A2A] text-[2rem] font-bold ml-8 pt-8 leading-normal">
              Traveller Details:
            </h1>
          </div>
        </div>
        {/* Form Section */}
        {/* Room Section */}
        <div className="ml-[8.5rem] mt-[14rem] w-[38rem]">
          <h1 className="text-2xl font-bold">
            Select Details <span className="text-red-600">*</span>
          </h1>
          <Card className="w-[43rem]  shadow-lg">
            <CardHeader></CardHeader>
            <CardContent>
              {/* Room Section */}
              <div className="border-t border-gray-200 py-4">
                <h2 className="text-lg font-bold mb-4">Travellers Details</h2>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">Adult</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handleDecrease(setAdultCount, adultCount)}
                    >
                      -
                    </Button>
                    <Input
                      value={adultCount}
                      readOnly
                      className="text-center w-[16rem] h-[3.25rem] ml-[18rem] bg-blue-50 border border-[#c3cfe9]"
                    />
                    <Button
                      variant="outline"
                      onClick={() => handleIncrease(setAdultCount, adultCount)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Child</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handleDecrease(setChildCount, childCount)}
                    >
                      -
                    </Button>
                    <Input
                      value={childCount}
                      readOnly
                      className="text-center w-[16rem] h-[3.25rem] ml-[18rem] bg-blue-50 border border-[#c3cfe9]"
                    />
                    <Button
                      variant="outline"
                      onClick={() => handleIncrease(setChildCount, childCount)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              {/* Date Picker Section */}
              <div className="mb-6">
                <span className="text-lg font-medium mb-2">Select Date</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[16rem] h-[3.25rem] ml-[15rem] justify-center font-normal bg-blue-50 border border-[#c3cfe9]",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "dd/MM/yy") : "dd/MM/yy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      minDate={new Date()} // This will ensure only future or present dates are selectable
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Traveller Detail Section */}
        <div className="ml-[8.5rem] mt-14 w-[38rem]">
          <h1 className="text-2xl font-bold">
            Please enter contact details<span className="text-red-600">*</span>
          </h1>
          <Card className="w-[43rem]  shadow-lg">
            <CardHeader></CardHeader>
            <CardContent>
              {/* Name */}
              <div className=" pt-4">
                <h1 className="text-xl font-semibold">
                  Name<span className="text-red-600">*</span>
                </h1>
                <Input
                  type="text"
                  required
                  className="text-center w-60  bg-blue-50 border border-[#c3cfe9]"
                  value={name} // Bind input to state
                  onChange={(e) => setName(e.target.value)} // Update state on input change
                />
              </div>

              {/* Email */}
              <div className="ml-96 -mt-16">
                <h1 className="text-xl font-semibold ">
                  Email<span className="text-red-600">*</span>
                </h1>
                <Input
                  type="email"
                  required
                  className="text-center w-60   bg-blue-50 border border-[#c3cfe9]"
                  value={email} // Bind input to state
                  onChange={(e) => setEmail(e.target.value)} // Update state on input change
                />
              </div>

              {/* Address */}
              <div className=" pt-4">
                <h1 className="text-xl font-semibold">
                  Address<span className="text-red-600">*</span>
                </h1>
                <Input
                  type="text"
                  required
                  className="text-center w-60  bg-blue-50 border border-[#c3cfe9]"
                  value={address} // Bind input to state
                  onChange={(e) => setAddress(e.target.value)} // Update state on input change
                />
              </div>

              {/* Phone Number */}
              <div className="ml-96 -mt-16">
                <h1 className="text-xl font-semibold ">
                  Phone Number<span className="text-red-600">*</span>
                </h1>
                <Input
                  type="text"
                  required
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="text-center w-60 bg-blue-50 border border-[#c3cfe9]"
                  style={{
                    MozAppearance: "textfield",
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                  value={phone} // Bind input to state
                  onChange={(e) => setPhone(e.target.value)} // Update state on input change
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-80 absolute ml-[70rem] flex flex-col items-center space-y-8">
        {/* Price Section */}
        <div className="w-80 h-60">
          {/* Card Container */}
          <div className="relative w-full h-[115%] bg-white rounded-2xl">
            <div className="w-full h-20 bg-blue-100 rounded-t-2xl flex items-center justify-center">
              <h2 className="text-gray-900 text-3xl font-bold font-['Inria Sans']">
                <span className="text-green-500">₹</span> Price Details
              </h2>
            </div>

            {/* Price Breakdown */}
            <div className="flex justify-between items-center text-neutral-700 text-2xl mb-2 p-[0.6rem]">
              <span className="pl-4">Adult x {adultCount}</span>
              <span className="pr-4">₹ {totalAdultPrice}</span>
            </div>
            <div className="border-t border-neutral-400 mb-2"></div>

            <div className="flex justify-between items-center text-neutral-700 text-2xl mb-2 p-[0.6rem]">
              <span className="pl-4">Child x {childCount}</span>
              <span className="pr-8">₹ {totalChildPrice}</span>
            </div>
            <div className="border-t border-neutral-400 my-2"></div>

            <div className="flex justify-between items-center text-red-600 text-2xl font-bold p-[0.6rem]">
              <span>Grand Total</span>
              <span>₹ {grandTotal}</span>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="w-80 h-60">
          <div className="relative w-full h-[71%] bg-white rounded-2xl  mt-8">
            <div className="w-full h-20 bg-blue-100 rounded-t-2xl flex items-center justify-center">
              <h1 className="absolute text-black text-3xl font-bold font-['Inria Sans']">
                Have a coupon?
              </h1>
              <div className="relative mt-[10rem] -ml-20">
                <input
                  className="w-full border-b-[1px] border-black focus:outline-none h-11"
                  type="text"
                  placeholder="Enter your coupon code"
                />
                <button className="absolute bg-[#4a7dda] text-white text-base font-bold px-4 py-2 rounded-sm mt-2 ml-2">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Payments Button */}
        <button
          className="bg-orange-600 text-nowrap text-white text-lg font-bold px-4 py-2 rounded-sm"
          onClick={() => setIsPaymentModalOpen(true)}
        >
          Proceed To Payments
        </button>
      </div>

      {isPaymentModalOpen && <PaymentModal />}

      {/* Footer Section */}
      <PkgBookingFooter />
    </div>
  );
}

export default MnpFirstPkg;
