"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import Amount from "./Amount";
import Camping from "./Camping";
import Information from "./Information";
import ButtonPrebook from "./ButtonPrebook";

const AccordionItem = ({
  isOpen,
  setIsOpen,
  item,
  step,
  text,
  answer,
  campingData,
  onCartUpdate,
  cartItems,
}) => {
  const handleUpdate = (updatedItem) => {
    onCartUpdate(updatedItem);
  };

  const ticketAmount = cartItems.reduce((total, item) => {
    return total + parseInt(item.count, 10);
  }, 0);

  return (
    <div className="py-4 px-12 border">
      <header>
        <button
          onClick={() => {
            isOpen === item ? setIsOpen(0) : setIsOpen(item);
          }}
          className="flex items-center justify-between w-full text-left font-semibold py-2"
        >
          <div className="flex items-center">
            <span className="text-black">{step}</span>
            <span className="text-black text-xl ml-8 self-start">{text}</span>
          </div>

          <span>
            {isOpen === item ? (
              <IoClose className=" text-black" />
            ) : (
              <IoRemove className="text-2xl text-black" />
            )}
          </span>
        </button>
      </header>

      {isOpen === item && (
        <section className="text-sm text-black">
          {item === 1 && (
            <>
              <Amount
                type="Regular"
                price={799}
                onUpdate={handleUpdate}
                cartItems={cartItems}
              />
              <Amount
                type="VIP"
                price={1299}
                onUpdate={handleUpdate}
                cartItems={cartItems}
              />

              <ButtonPrebook
                background={true}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // onClick={() => {
                //     console.log("open camping section");
                //  setIsOpen(2)} }
              ></ButtonPrebook>
            </>
          )}
          {item === 2 && (
            <Camping
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              cartItems={cartItems}
            />
          )}
          {/* {item === 2 && campingData && <Camping campingData= {campingData}/>} */}
          {item === 3 && (
            <>
              {Array.from({ length: ticketAmount }, (_, index) => (
                <Information key={index} cartItems={cartItems} />
              ))}
            </>
          )}

          {/* <p className="pb-3">{answer}</p> */}
        </section>
      )}
    </div>
  );
};

export default AccordionItem;
