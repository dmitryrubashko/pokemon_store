import PersonalDataPageLayout from "../components/personalDataPageLayout";

import {useSelector} from "react-redux";

const PersonalDataPageContainer = () => {
  const {info} = useSelector((state) => state.auth)
  console.log(info.address)
  return <PersonalDataPageLayout
    firstName={info.firstName}
    lastName={info.lastName}
    gender={info.gender}
    email={info.email}
    phone={info.phone}
  />
};

export default PersonalDataPageContainer;
