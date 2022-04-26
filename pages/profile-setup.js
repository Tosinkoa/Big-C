import ProfileForm from "@/components/ProfileForm";
import Layout from "@/components/Layout";
import Authorization from "@/HOC/Authorization";
import { useGetProfileQuery, useGetUserQuery } from "@/store/fetcherApi";

const ProfileSetup = () => {
  const { data: user, isLoading: userLoading } = useGetUserQuery();
  const { data: profile, isLoading: profileLoading } = useGetProfileQuery();

  const theProfile = {
    profileImage: profile?.profileImage,
    coverImage: profile?.coverImage,
    name: user?.name,
    description: profile?.description,
    businessStatus: profile?.businessStatus,
    availability: profile?.availability,
    phoneNumber: profile?.phoneNumber,
  };
  return (
    <Layout>
      {userLoading && profileLoading && <p>Loading...</p>}
      {user && <ProfileForm theProfile={theProfile} />}
    </Layout>
  );
};

export default Authorization(ProfileSetup);
