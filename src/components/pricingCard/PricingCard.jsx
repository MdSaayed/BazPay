import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../ui/Button";

const PricingCard = ({plan}) => {


  return (
    <>
      {plan?.map((item, index) => (
        <div key={index}
          className={`rounded-3xl bg-white`}
        >
          <div className={`${item?.highlighted ? 'bg-primary': 'bg-davyGray'} rounded-3xl p-8`}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg text-softWhite">
                {item.title}
              </span>
              {item.highlighted && (
                <span className=" bg-limeGreen text-softWhite text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
          </div>
            <div className="flex items-end gap-1 mt-4">
              <h3 className="text-5xl font-semibold text-softWhite">
                {item.price}
              </h3>
              <span className="font-medium text-base text-softWhite">
                {item.duration}
              </span>
            </div>
            <p className="text-[#F5F5F5] text-base font-normal mt-6 mb-8">
              {item.description}
            </p>

            <Button text={item.buttonText} fullWidth={true} />
          </div>

          <div className="p-8">
            <p className="text-primary text-base font-semibold">FEATURES</p>
            <p className="text-[#535862] text-base font-normal mt-1 mb-6">
              Standard item grants you access to exclusive features
            </p>

            <ul>
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 mb-4">
                  <FaRegCircleCheck className="text-[#9CFA6D] text-xl" />
                  <span className="font-normal text-base text-davyGray">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PricingCard;
