"use client";

import { observer } from "mobx-react-lite";

import { FormProfile, ProfileLayout } from "@components";

const ProfileComponent = () => {
  return (
    <ProfileLayout>
      <FormProfile />
    </ProfileLayout>
  );
};

export const Profile = observer(ProfileComponent);
