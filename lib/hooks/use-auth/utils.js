export const nextAuthHandler = ({ data, router }) => {
  if (Array.isArray(data.nextAuthFactor) && data.user) {
    const user = data.user;

    for (const authFactor of data.nextAuthFactor) {
      if (
        authFactor === `auth.emailConfirmation` &&
        user.isEmailConfirmationEnabled
      ) {
        router.push(`/auth/confirm-email`);
        return;
      }

      if (
        authFactor === `auth.phoneConfirmation` &&
        user.isPhoneConfirmationEnabled
      ) {
        router?.push(`/auth/confirm-phone`);
        return;
      }

      if (authFactor === `user.checkOtp` && user.isOtpConfirmationEnabled) {
        router?.push(`/auth/otp`);
        return;
      }
    }
  }

  if (data.nextAuthFactor === `auth.emailConfirmation`) {
    router.push(`/auth/confirm-email`);
  } else if (data.nextAuthFactor === `auth.phoneConfirmation`) {
    router?.push(`/auth/confirm-phone`);
  } else if (data.nextAuthFactor === `user.checkOtp`) {
    router?.push(`/auth/otp`);
  }
};
