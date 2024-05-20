"use client";

import { observer } from "mobx-react-lite";

import { FormProfile, LoaderLayout, ProfileLayout } from "@components";

const ProfileComponent = () => {
  return (
    <ProfileLayout>
      <LoaderLayout height={200}>
        <FormProfile />
      </LoaderLayout>
    </ProfileLayout>
  );
};

export const Profile = observer(ProfileComponent);
