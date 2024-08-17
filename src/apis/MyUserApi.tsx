import { AdminData } from "@/app/login/page";
import { AdminFormData } from "@/app/signup/page";
import axios from "axios";
const API_BASE_URL = "http://localhost:7000";

export const getUser = async (adminFormData: AdminData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/user/login`,
      adminFormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createUser = async (adminFormData: AdminFormData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/user/signup`,
      adminFormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
