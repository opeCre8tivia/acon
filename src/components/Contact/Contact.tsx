import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3laiyma",
        "template_3lsodrn",
        form.current,
        "bhcs8KRNTyxHgcgrC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div
        id="contact"
        className="w-full h-fit  flex justify-center items-start flex-wrap bg-blue-950"
      >
        {/* large text */}
        <div className=" w-full h-full  sm:min-h-[400px]  flex justify-center items-center sm:w-[50%] py-10 sm:py-2 ">
          <h1 className="text-[30px] text-gray-300 font-extrabold w-[80%] text-center">
            We would love to hear from you
          </h1>
        </div>

        {/* text */}
        <div className="w-full sm:bg-transparent sm:w-[50%] h-full p-4 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" w-full sm:w-[80%] bg-transparent h-[500px]"
          >
            <label className="text-gray-400 font-medium ">
              Enter your name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full h-[40px] bg-white mb-4 "
            />
            <label className="text-gray-400 font-medium ">
              Enter your email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full h-[40px] bg-white  mb-4 "
            />
            <label className="text-gray-400 font-medium ">Enter Message</label>
            <textarea name="message" className="w-full min-h-[200px]" />
            <button
              type="submit"
              className="bg-transparent hover:bg-teal-300 text-white font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded my-4"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
