import axiosInstance from "@/shared/lib/axiosInstance";
import { API_URLS } from "@/shared/constants/apiUrls";

export const getBulletin = () => axiosInstance.get(API_URLS.bulletin.list);
