import React from "react";

const FormDataPlayer = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col gap-2 content-center items-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-2xl">
          Enter your name
        </label>
        <input
          type="text"
          id="player"
          placeholder="Your name..."
          className="text-black block rounded text-2xl"
        />
        <button
          type="submit"
          className="bg-gray-800 text-xl rounded border-black border-2 w-4/12">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDataPlayer;
