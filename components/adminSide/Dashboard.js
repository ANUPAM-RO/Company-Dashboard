import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../../firebaseconfig";
const Dashboard = () => {
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
  // const getConsultData = async () => {
  //   getDocs(collection(database, "Consult requests")).then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data());
  //     setConsultData(data);
  //   });
  // };
  // const getReportData = async () => {
  //   getDocs(collection(database, "Report Generate request")).then(
  //     (querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       setReportData(data);
  //     }
  //   );
  // };
  // const getTransactionData = async () => {
  //   getDocs(collection(database, "Shop Transaction Details")).then(
  //     (querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       setTransaction(data);
  //     }
  //   );
  // };

  const deleteMember = async (id) => {
    await deleteDoc(doc(database, "store member", id));
  };

  useEffect(() => {
    getMemberData();
    getProjectData();
  }, [memberData, projectData]);
  return (
    <div>
      <div className="text-3xl text-center font-bold text-green-700">
        DASHBOARD
      </div>
      <div className="flex gap-6 justify-end m-6 mr-36">
        <Link href="/adminPage/member-add">
          <button className="btn btn-primary">Add Member</button>
        </Link>
        <Link href="/adminPage/project-add">
          <button className="btn btn-secondary">Add Project</button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <div className="text-center font-bold text-xl pb-4">ALL MEMBER</div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Member_Id</th>
              <th>Member_Name</th>
              <th>Designation</th>
              <th>Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!!memberData.length &&
              memberData?.map((s) => (
                <tr className="" key={s.member_Id}>
                  <td>{s.member_Id}</td>
                  <td>{s.member_Name}</td>
                  <td>{s.degisnation}</td>
                  <td>{s.type}</td>
                  <td>
                    <button
                      className="btn bg-yellow-600 border-none hover:bg-yellow-500"
                      onClick={() => deleteMember(s.member_Id)}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn  bg-red-600 border-none hover:bg-red-500"
                      onClick={() => deleteMember(s.member_Id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Table title="PROJECTS" dataArr={projectData} />
    </div>
  );
};

const Table = ({ title, dataArr }) => {
  const deleteProject = async (id) => {
    await deleteDoc(doc(database, "store project", id));
  };
  return (
    <div className="overflow-x-auto pt-6">
      <div className="text-center font-bold text-xl pb-5">{title}</div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Project Type</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!!dataArr.length &&
            dataArr?.map((s) => (
              <tr className="" key={s.project_Id}>
                <td>{s.project_Id}</td>
                <td>{s.project_Name}</td>
                <td>{s.project_Type}</td>
                <td>{s.project_Amount}</td>
                <td>
                  <button className="btn bg-yellow-600 border-none hover:bg-yellow-500">
                    EDIT
                  </button>
                </td>
                <td>
                  <button
                    className="btn  bg-red-600 border-none hover:bg-red-500"
                    onClick={() => deleteProject(s.project_Id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;