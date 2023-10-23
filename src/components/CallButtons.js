import React from "react";
import CustomButton from "./CustomButton";
import { useMyContext } from "../MyContext";

export function CallWaiterButton({ showCallWaiterButton }) {
  const { isWaiterButtonActive, handleCallWaiter, zonti } = useMyContext();

  return (
    <CustomButton
      disabled={!isWaiterButtonActive}
      visibility={showCallWaiterButton}
      onClick={handleCallWaiter}
      label={
        isWaiterButtonActive
          ? `Table ${zonti}. Call the Waiter`
          : `The waiter is running to you.`
      }
    />
  );
}

export function CallBillButton({ showCallWaiterButton }) {
  const { isButtonBillActive, handleCallBill, zonti } = useMyContext();

  return (
    <CustomButton
      disabled={!isButtonBillActive}
      visibility={showCallWaiterButton}
      onClick={handleCallBill}
      label={
        isButtonBillActive
          ? `Table ${zonti}. Call the Bill`
          : `The waiter is running to you.`
      }
    />
  );
}
