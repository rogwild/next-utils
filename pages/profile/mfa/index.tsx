import React, { useEffect } from "react";
import utils from "~next-utils";
const { useSetOtp } = utils.hooks;
const { Input } = utils.components;
import { profilesApi } from "~backend/models/profiles";
import { blackButtonProps, otpInputProps } from "~utils/vanilla";
import useMyProfile from "~redux/services/backend/models/profiles/useMyProfile";
import { useSelector } from "react-redux";
import Link from "next/link";

const MfaPage = () => {
  const { me: user } = useMyProfile();

  return (
    <div className="w-1/2 mx-auto p-4 flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">
        Multi Factor Authentification
      </h1>
      {user.isOtpEnabled ? (
        <Link href="/profile/mfa/delete-otp" {...blackButtonProps}>
          Delete OTP
        </Link>
      ) : (
        <Link href="/profile/mfa/set-otp" {...blackButtonProps}>
          Set OTP
        </Link>
      )}
    </div>
  );
};

export default MfaPage;
