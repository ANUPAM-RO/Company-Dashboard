import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/firebaseconfig";
import UpdateFund from "@/components/adminSide/UpdateFund";
import { useRouter } from "next/router";

const EditFund = () => {
  const [projectData, setProjectData] = useState([]);
  const router = useRouter();
  const fundId = router?.query?.Id;
  const getShareData = async () => {
    getDocs(collection(database, "fund")).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setProjectData(data);
    });
  };

  const projectDetails = projectData?.filter((data) => data?.id === fundId);
  useEffect(() => {
    getShareData();
  }, []);
  return (
    <div>
      <UpdateFund fundData={projectDetails[0]} />
    </div>
  );
};

export default EditFund;
