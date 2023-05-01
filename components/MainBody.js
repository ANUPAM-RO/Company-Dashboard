import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/firebaseconfig";
import Department from "./Department";

const MainBody = () => {
  const [memberData, setMemberData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const getMemberData = async () => {
    getDocs(collection(database, "store member")).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setMemberData(data);
    });
  };
  const getProjectData = async () => {
    getDocs(collection(database, "store project")).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setProjectData(data);
    });
  };
  const currentProjects = projectData?.filter(
    (data) => data?.project_Type === "current"
  );
  const previousProjects = projectData?.filter(
    (data) => data?.project_Type === "previous"
  );
  useEffect(() => {
    getMemberData();
    getProjectData();
  }, []);
  return (
    <div>
      <div className="text-2xl font-bold text-green-800 flex justify-center pb-4 pt-4">
        PERTNERS
      </div>
      <div className="flex justify-between">
        <div className="card w-96 h-36 bg-lime-500 text-primary-content ml-2">
          <div className="card-body">
            <p className="text-xl text-cyan-700">
              Partner Name :
              <span className="text-green-800 font-bold pl-2">XYZ</span>
            </p>
            <p className="text-xl text-purple-800">
              Share Persentage : <span className="text-amber-800">50%</span>
            </p>
          </div>
        </div>
        <div className="card w-96 h-36 bg-lime-500 text-primary-content mr-2">
          <div className="card-body">
            <p className="text-xl text-cyan-700">
              Partner Name :
              <span className="text-green-800 font-bold pl-2">XYZ</span>
            </p>
            <p className="text-xl text-purple-800">
              Share Persentage : <span className="text-amber-800">50%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-red-500 flex justify-center pb-4 pt-4">
        PROJECTS
      </div>
      <div>
        <p className="text-xl font-bold text-red-700 p-4">Previous Projects:</p>
        <div className="grid grid-cols-3 gap-4">
          {!!previousProjects?.length &&
            previousProjects?.map((data) => (
              <div className="card w-96 bg-neutral text-neutral-content m-4">
                <div className="card-body">
                  <h2 className="card-title text-lime-400">
                    Project name :
                    <span className="text-emerald-500">
                      {data?.project_Name}
                    </span>
                  </h2>
                  <p className="text-sky-400">
                    Amount :
                    <span className="text-cyan-400 font-medium pl-2">
                      {data?.project_Amount}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <p className="text-xl font-bold text-red-700 p-4">Current Projects:</p>
        <div className="grid grid-cols-3 gap-4">
          {!!currentProjects?.length &&
            currentProjects?.map((data) => (
              <div className="card w-96 bg-neutral text-neutral-content m-4">
                <div className="card-body">
                  <h2 className="card-title text-lime-400">
                    Project name :
                    <span className="text-emerald-500">
                      {data?.project_Name}
                    </span>
                  </h2>
                  <p className="text-sky-400">
                    Amount :
                    <span className="text-cyan-400 font-medium pl-2">
                      {data?.project_Amount}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="text-2xl font-bold text-yellow-700 flex justify-center pb-4 pt-4">
        DEPARTMENT
      </div>
      <Department memberData={memberData} />
    </div>
  );
};

export default MainBody;
