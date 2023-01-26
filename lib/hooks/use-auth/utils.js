export const nextAuthHandler = ({ data, router }) => {
  if (data.nextAuthFactor === `auth.emailConfirmation`) {
    router.push(`/auth/confirm-email`);
  } else if (data.nextAuthFactor === `auth.phoneConfirmation`) {
    router?.push(`/auth/confirm-phone`);
  } else if (data.nextAuthFactor === `user.checkOtp`) {
    router?.push(`/auth/otp`);
  }
};
