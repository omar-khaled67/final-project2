import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";

const Donor = () => {
  const location = useLocation();
  const donorId = location.pathname.split("/")[3];
  const [donor, setDonor] = useState({});
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const getDonor = async () => {
      try {
        const res = await publicRequest.get(`/donors/find/${donorId}`);
        setDonor(res.data);
      } catch (error) {
        console.log("❌ Error fetching donor:", error);
      }
    };
    getDonor();
  }, [donorId]);

  const handleUpdate = async () => {
    try {
      await publicRequest.put(`/donors/${donor._id}`, inputs);
      alert("✅ Donor updated successfully!");
      window.location.reload();
    } catch (error) {
      console.log("❌ Error updating donor:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold">Donor</h2>

        <div className="flex flex-col my-[20px]">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder={donor.name}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder={donor.address}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label>Tel</label>
          <input
            type="text"
            name="tel"
            placeholder={donor.tel}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label>Blood Group</label>
          <input
            type="text"
            name="bloodgroup"
            placeholder={donor.bloodgroup}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder={donor.email}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>
      </div>

      <div className="p-[20px] h-[80vh] w-[450px] shadow-lg m-[20px]">
        <div className="flex flex-col my-[20px]">
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            placeholder={donor.weight}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label>Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label>Diseases</label>
          <textarea
            name="diseases"
            placeholder={donor.diseases}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none p-[10px] w-[300px]"
          />
        </div>

        <button
          className="bg-[#444242] cursor-pointer text-white p-[10px] w-[300px]"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Donor;
