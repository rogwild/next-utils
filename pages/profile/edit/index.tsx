import React, { useEffect } from "react";
import utils from "~next-utils";
const { useUpdateMe } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, textInputProps } from "~utils/vanilla";
import { useSelector } from "react-redux";

const ProfileEdit = () => {
  const {
    inputs,
    onSubmit,
    data,
    isLoading,
  }: { inputs: any; onSubmit: any; data: any; isLoading: boolean } =
    useUpdateMe({
      profilesApi,
      useSelector,
    });

  useEffect(() => {
    console.log(`🚀 ~ ProfileEdit ~ data`, data, isLoading);
  }, [data]);

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Update profile</h1>
      {data ? <h4>Profile was successfully updated</h4> : null}
      <Input {...inputs.username} {...textInputProps} />
      <button onClick={onSubmit} {...blackButtonProps}>
        Edit profile
      </button>
    </div>
  );
};

export default ProfileEdit;
