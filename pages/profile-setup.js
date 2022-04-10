import ProfileForm from "@/components/ProfileForm";
import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";
import { useGetProfileQuery, useGetUserQuery } from "@/store/ReduxStore/fetcherApi";

const ProfileSetup = () => {
  const { data: user, isLoading: userLoading } = useGetUserQuery();
  const { data: profile, isLoading: profileLoading } = useGetProfileQuery();

  const theProfile = {
    backgroundPicture: "",
    profilePicture: "",
    name: user?.name ?? "",
    description: profile?.description ?? "",
    businessStatus: profile?.businessStatus ?? "",
    availability: profile?.availability ?? "",
    phoneNumber: profile?.phoneNumber ?? "",
  };
  console.log(profile);
  return (
    <Layout>
      {userLoading && profileLoading && <p>Loading...</p>}
      {user && <ProfileForm theProfile={theProfile} />}
    </Layout>
  );
};

export default Authorization(ProfileSetup);
