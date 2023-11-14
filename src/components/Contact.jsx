/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgwveyd");

  if (state.succeeded) {
    return(
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-center">
        <h1 className="py-4 text-4xl font-bold text-[#001b5e]">
          Contact
        </h1>
        <div className="bg-green-200 text-green-800 p-4 rounded-md">
          Thanks for joining!
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
