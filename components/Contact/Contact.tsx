import React, { useState } from "react";
import FirstName from "../FormFields/FirstName";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import contactUsValidation from "../../validations/registrationValidation.js";
import signupSchema from "../../validations/registrationValidation.js";
import { yupResolver } from "@hookform/resolvers/yup";
import LastName from "../FormFields/LastName";
import Email from "../FormFields/Email";
import FormInput from "../FormFields/FormInput";

declare global {
  interface Window {
    recaptchaWorks: any;
    dataLayer: any;
    yotpo: number;
  }
}
type Props = yup.InferType<typeof contactUsValidation>;

const Contact: React.FunctionComponent<{
  header1?: string;
  header2?: string;
  bgImage: string;
  alt: string;
  align: string;
  textAlign: string;
}> = ({ header1, header2, bgImage, alt, align, textAlign }) => {
  const [firstNameInput, setFirstNameInput] = useState("");

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = "";
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value[i].match(/[a-zA-Z]|\-/g)) value += e.target.value[i];
    }
    if (e.target.value.length > 0) {
      value = e.target.value.toUpperCase();
      delete errors["001"];
    }
    setFirstNameInput(value);
  };

  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({
    mode: "onChange",
    resolver: yupResolver(signupSchema),
  });

  const ProjectLabelStyle = "inside";

  return (
    <div
      id="contact"
      className={`mx-auto flex flex-col items-center ${align} py-10 md:flex-row h-auto w-full relative`}
    >
      <img
        src={bgImage}
        alt={alt}
        className="lg:aspect-video lg:w-full lg:h-auto h-full aspect-auto object-center flex-1 object-cover absolute z-0"
      />
      <div
        className={`flex flex-col md:w-1/2 sm:w-3/4 w-full gap-y-3 lg:gap-y-5 z-10 `}
      >
        <h2 className="font-raleway text-4xl text-center">Contact Me</h2>
        {header1 && (
          <h2
            className={`font-raleway text-8xl ${textAlign}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {header1}
          </h2>
        )}
        {header2 && (
          <p
            className={`font-raleway text-2xl ${textAlign}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {header2}
          </p>
        )}

        <form
          action="https://formspree.io/f/mdoqvylq"
          className="flex flex-col"
          method="POST"
          target="_blank"
        >
          <div className="w-full flex lg:flex-row flex-col gap-4 justify-between">
            <FirstName
              register={{ ...register("001") }}
              errorMsg={errors["001"]?.message}
              labelStyle={ProjectLabelStyle}
              half
              setValue={setValue}
            />
            <LastName
              register={{ ...register("002") }}
              errorMsg={errors["002"]?.message}
              labelStyle={ProjectLabelStyle}
              half
              setValue={setValue}
            />
          </div>
          <div className="w-full flex lg:flex-row flex-col pt-4">
            <Email
              register={{ ...register("003") }}
              errorMsg={errors["003"]?.message}
              labelStyle={ProjectLabelStyle}
              setValue={setValue}
            />
          </div>
          <div className="w-full flex lg:flex-row flex-col pt-4">
            <FormInput
              register={{ ...register("004") }}
              errorMsg={errors["004"]?.message}
              labelStyle={ProjectLabelStyle}
              setValue={setValue}
              id="Message"
              registeredId="004"
              label="Message*"
            />
          </div>

          <button type="submit"  className="bg-lightGray rounded-md px-4 py-2 mt-2 text-black hover:bg-darkGray font-raleway text-2xl">
            Send it
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
