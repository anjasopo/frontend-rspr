import { useState } from "react";

const PatientTable = () => {
  const [patients, setPatients] = useState([
    { name: "Tom Cruise", address: "Jl. Bhineka Tunggal Ika NO 05", contact: "(0274)00000" },
    { name: "Angelina Jolie", address: "Jl. Utara Pelajar NO 78", contact: "(0274)80000" },
  ]);

  const [newPatient, setNewPatient] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const handleAddPatient = () => {
    if (newPatient.name && newPatient.address && newPatient.contact) {
      setPatients([...patients, newPatient]);
      setNewPatient({ name: "", address: "", contact: "" });
    } else {
      alert("Silahkan isi semua data pasien.");
    }
  };

  const handleDeletePatient = (index) => {
    setPatients(patients.filter((_, i) => i !== index));
  };

  return (
    <div className="p-12">
      <div className="mb-4 grid grid-cols-4 gap-6">
        <InputField
          placeholder="PASIEN"
          value={newPatient.name}
          onChange={(e) =>
            setNewPatient({ ...newPatient, name: e.target.value })
          }
        />
        <InputField
          placeholder="ALAMAT"
          value={newPatient.address}
          onChange={(e) =>
            setNewPatient({ ...newPatient, address: e.target.value })
          }
        />
        <InputField
          placeholder="KONTAK"
          value={newPatient.contact}
          onChange={(e) =>
            setNewPatient({ ...newPatient, contact: e.target.value })
          }
        />
        <button
          onClick={handleAddPatient}
          className={`btn btn-success text-white w-full`}
        >
          Add
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-y-2 py-2 text-left">PASIEN</th>
            <th className="border-y-2 py-2 text-left">ALAMAT</th>
            <th className="border-y-2 py-2 text-left">KONTAK</th>
            <th className="border-y-2 py-2 text-right"></th>
          </tr>
        </thead>
        <tbody>
          {patients.map(({ name, address, contact }, index) => (
            <tr key={index}>
              <td className="border-y-2 py-2">{name}</td>
              <td className="border-y-2 py-2">{address}</td>
              <td className="border-y-2 py-2">{contact}</td>
              <td className="border-y-2 py-2 text-right">
                <button
                  onClick={() => handleDeletePatient(index)}
                  className={`btn text-white btn-error`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InputField = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border p-2 w-full rounded"
  />
);

export default PatientTable;
