import { useSelector } from "react-redux";
import utils from "../../../../../src";
const { useMyProfileCreator } = utils.hooks;
import { profilesApi } from "./index";

const useMyProfile = () => useMyProfileCreator({ profilesApi, useSelector });

export default useMyProfile;
