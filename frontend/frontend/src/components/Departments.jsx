import { useEffect, useState } from "react";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/departments/GetAllDepartments")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched departments:", data);
        if (data.length > 0) {
          setDepartments(data);
          setActiveTab(data[0]._id.toString());
        }
      })
      .catch((err) => {
        console.error("Error fetching departments:", err);
      });
  }, []);

  const handleTableClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="py-12 bg-white max-w-6xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Departments</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our specialized medical departments staffed with expert
          doctors
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <ul className="flex flex-wrap md:flex-col gap-2 border-b md:border-b-0 md:border-r border-gray-300 p-2 rounded-lg bg-gray-50">
          {departments.map((dep) => (
            <li key={dep._id.toString()}>
              <button
                onClick={() => handleTableClick(dep._id.toString())}
                className={`w-full text-left px-5 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === dep._id.toString()
                    ? "bg-[#008e9b] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {dep?.name}
                {/* not showing data before loading page*/}
              </button>
            </li>
          ))}
        </ul>
        {/* Tab Content */}
        <div className="flex-1 p-6 rounded-lg bg-white shadow-sm">
          {departments?.map((dept) => {
            if (dept._id.toString() === activeTab) {
              return (
                <div key={dept._id}>
                  <h3 className="text-2xl font-semibold mb-4">{dept.name}</h3>
                  <p className="text-gray-600">{dept.description}</p>

                  {/*Image*/}
                  <div></div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Departments;
