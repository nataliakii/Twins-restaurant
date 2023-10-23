import React, { createContext, useContext, useEffect, useState } from "react";
import { sendWaiter, sendBill } from "./assets/BotRequest";

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}
const contacts = {
  name: "Twins",
  slogan: "Double the Flavor, Twice the Fun by the Aegean Sun!",
  tel: "+30691111111",
  email: "twins@gmail.com",
  schedule: "Mon-Sat: 11AM - 23PM",
  address: "Mikoniaty str, 1,  Nea Kallikratia, Halchidiki, Greece 60380",
  coords: { lat: 40.3102929, lon: 23.0648383 },
  searchRadius: 3000,
  chat_id: -4088789673,
};

export function MyContextProvider({ children }) {
  const countTimer = 10;
  const [zonti, setZont] = useState(0);

  const [countdownWaiter, setCountdownWaiter] = useState(0);
  const [countdownBill, setCountdownBill] = useState(0);

  const [isWaiterButtonActive, setWaiterButtonActive] = useState(true);
  const [isButtonBillActive, setButtonBillActive] = useState(true);

  const confirmAction = (message) => {
    const confirmed = window.confirm(message);
    if (confirmed) {
      return true;
    }
    return false;
  };

  const messageWaiter1 = `${contacts.name}. Table ${zonti} Call The Waiter.`;
  // const messageWaiter2 = `${contacts.name}. Table ${zonti} Just Called The Bill by Mistake, Waiter is calling.`;
  const messageBill1 = `${contacts.name}.Table ${zonti} ask for Bill.`;
  // const messageBill2 = `${contacts.name}.Table ${zonti} Just Called The Waiter by Mistake, Bill is calling.`;

  const performActionWaiter = (action) => {
    action();
    setWaiterButtonActive(false);
    setCountdownWaiter(countTimer);
    localStorage.setItem("isWaiterButtonActive", JSON.stringify(false));
  };
  const performActionBill = (action) => {
    action();
    setButtonBillActive(false);
    setCountdownBill(countTimer);
    localStorage.setItem("isButtonBillActive", JSON.stringify(false));
  };

  const handleCallWaiter = () => {
    if (isWaiterButtonActive) {
      if (
        !isButtonBillActive &&
        !confirmAction("Do you want to order something more instead of Bill?")
      ) {
        return;
      }
      const startTime = Math.floor(new Date().getTime() / 1000);
      localStorage.setItem("StartTimeWaiter", startTime.toString);
      performActionWaiter(() => {
        sendWaiter(
          messageWaiter1,
          zonti,
          contacts.coords,
          contacts.searchRadius,
          contacts.bloomBot_api
        );
      });
    } else {
      alert("Waiter is already running to you.");
    }
  };

  const handleCallBill = () => {
    if (isButtonBillActive) {
      if (
        !isWaiterButtonActive &&
        !confirmAction(
          "Do you want to call for the Bill instead of ordering something more?"
        )
      ) {
        return;
      }
      const startTime = Math.floor(new Date().getTime() / 1000);
      localStorage.setItem("StartTimeBill", startTime.toString);
      performActionBill(() => {
        sendBill(
          messageBill1,
          zonti,
          contacts.coords,
          contacts.searchRadius,
          contacts.bloomBot_api
        );
      });
    } else {
      alert("Waiter is already running to you..");
    }
  };

  // Periodically update the Waiter countdown timer using setInterval
  useEffect(() => {
    const waiterInterval = setInterval(() => {
      // Update countdown of Waiter button
      setCountdownWaiter((prevCountdown) => {
        if (prevCountdown === 0) {
          // Countdown finished
          clearInterval(waiterInterval); // Stop the interval
          setWaiterButtonActive(true);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000); // 1 second interval

    return () => clearInterval(waiterInterval); // Cleanup when the component unmounts
  }, [isButtonBillActive]);

  // Periodically update the Bill countdown timer using setInterval
  useEffect(() => {
    const billInterval = setInterval(() => {
      // Update countdown of Waiter button
      setCountdownBill((prevCountdown) => {
        if (prevCountdown === 0) {
          // Countdown finished
          clearInterval(billInterval); // Stop the interval
          setButtonBillActive(true);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000); // 1 second interval

    return () => clearInterval(billInterval); // Cleanup when the component unmounts
  }, [isButtonBillActive]);

  // Load countdown start time and button state from localStorage on component mount
  useEffect(() => {
    const savedStartTimeWaiter = parseInt(
      localStorage.getItem("StartTimeWaiter"),
      10
    );
    const savedIsWaiterButtonActive = JSON.parse(
      localStorage.getItem("isWaiterButtonActive")
    );

    if (!isNaN(savedStartTimeWaiter) && savedIsWaiterButtonActive !== null) {
      const currentTime = Math.floor(new Date().getTime() / 1000);
      const elapsedSeconds = currentTime - savedStartTimeWaiter;

      if (elapsedSeconds >= countTimer) {
        // Timer has expired, set button as active
        setWaiterButtonActive(true);
        setCountdownWaiter(0);
        localStorage.removeItem("StartTimeWaiter");
      } else {
        // Timer still active, set button as inactive
        console.log(localStorage);
        setWaiterButtonActive(true);
        setCountdownWaiter(countTimer - elapsedSeconds);
      }
    }
  }, []);

  useEffect(() => {
    const savedStartTimeBill = parseInt(
      localStorage.getItem("StartTimeBill"),
      10
    );
    const savedButtonBillActive = JSON.parse(
      localStorage.getItem("isButtonBillActive")
    );

    if (!isNaN(savedStartTimeBill) && savedButtonBillActive !== null) {
      const currentTime = Math.floor(new Date().getTime() / 1000);
      const elapsedSeconds = currentTime - savedStartTimeBill;

      if (elapsedSeconds >= countTimer) {
        // Timer has expired, set button as active
        setButtonBillActive(true);
        setCountdownBill(0);
        console.log(localStorage);
        localStorage.removeItem("StartTimeBill");
      } else {
        // Timer still active, set button as inactive
        setButtonBillActive(true);
        setCountdownBill(countTimer - elapsedSeconds);
      }
    }
  }, []);

  const contextValue = {
    countdownWaiter,
    countdownBill,
    isWaiterButtonActive,
    isButtonBillActive,
    setCountdownWaiter,
    setButtonBillActive,
    handleCallWaiter,
    handleCallBill,
    zonti,
    setZont,
    contacts,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
