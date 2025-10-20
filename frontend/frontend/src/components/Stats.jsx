import { useEffect, useState } from "react";
import { FaUserMd, FaHospital, FaFlask, FaAward } from "react-icons/fa";

const Stats = () => {
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [departmentsCount, setDepartmentsCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const doctorsStats = await fetch("http://localhost:3000/doctors/count");
        const departmentsStats = await fetch(
          "http://localhost:3000/departments/count"
        );

        const doctorsData = await doctorsStats.json();
        const departmentsData = await departmentsStats.json();

        setDoctorsCount(doctorsData.count || 0);
        setDepartmentsCount(departmentsData.count || 0);

        console.log("Doctors count From API", doctorsData.count);
        console.log("Departments count From API", departmentsData.count);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      icon: <FaUserMd className="text-blue-500 text-5xl mb-4" />,
      count: doctorsCount,
      label: "Doctors",
    },
    {
      icon: <FaHospital className="text-green-500 text-5xl mb-4" />,
      count: departmentsCount,
      label: "Departments",
    },
    {
      icon: <FaFlask className="text-purple-500 text-5xl mb-4" />,
      count: 8,
      label: "Research Labs",
    },
    {
      icon: <FaAward className="text-yellow-500 text-5xl mb-4" />,
      count: 10,
      label: "Awards Won",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              {item.icon}
              <h3 className="text-3xl font-bold text-gray-800 mb-1">
                {item.count}+
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
