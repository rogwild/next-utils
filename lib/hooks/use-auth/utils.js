export const nextAuthHandler = ({ data, router }) => {
  if (data.user && data?.nextAuthFactor) {
    if (data.nextAuthFactor.type === "one") {
      if (Array.isArray(data.nextAuthFactor.handler)) {
        const user = data.user;

        for (const authFactor of data.nextAuthFactor.handler) {
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
    }
  }

  if (data?.nextAuthFactor?.hander === `auth.emailConfirmation`) {
    router.push(`/auth/confirm-email`);
  } else if (data?.nextAuthFactor?.hander === `auth.phoneConfirmation`) {
    router?.push(`/auth/confirm-phone`);
  } else if (data?.nextAuthFactor?.hander === `user.checkOtp`) {
    router?.push(`/auth/otp`);
  }
};
