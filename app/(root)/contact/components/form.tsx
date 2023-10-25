'use client';

import Button from "@/components/ui/button";


const FormContactMe = () => {
  return (
    <form className="max-w-2xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4 ">
        <input
          className="w-full bg-dark-light outline-none py-3 px-4 rounded  "
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full bg-dark-light outline-none py-3 px-4 rounded  "
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full bg-dark-light outline-none py-3 px-4 rounded  "
          placeholder="Message"
          rows={5}
        />
      </div>
      <Button type="submit" label="Send Messsage" onClick={() => {}}/>
    </form>
  );
};

export default FormContactMe;
