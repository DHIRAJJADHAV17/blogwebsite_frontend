import { commentData } from "@/app/blog/[id]/page";
import { BlogFormData } from "@/components/form/EditAddBlog";
import axios from "axios";

const API_BASE_URL = "http://localhost:7000";
const accToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaW5mbyI6eyJfaWQiOiI2NmJmOWJiMmU1NDk5M2U2NTA1ZmM2MTYiLCJmdWxsbmFtZSI6ImpkYWRoYXYiLCJlbWFpbCI6ImpkQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDF5RVd4UFBYNmNwLmsva3NDMC9jL3V2ZldEZ24ycDJDcnJ1NzVWeExSZGhaNlI0WS9wQnE2IiwiY3JlYXRlZE9uIjoiMjAyNC0wOC0xNlQxNzowNjoyNS4yNjRaIiwiX192IjowfSwiaWF0IjoxNzIzODM2NzQwLCJleHAiOjE3MjQwOTU5NDB9.lJo4fxQu-IT6Wn4mkSKiudJTCqgJsxaeNk8hfZMvVM0";
export const createBlog = async (data: BlogFormData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/blog/add-blog`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAllBlog = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/blog/get-all-blogs`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
export const getSingleBlog = async (id: any) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/blog/get-single-blog/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const addcomment = async (data: commentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/blog/add-comments`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getcomment = async (id: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/blog/getcomment/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getMyBlog = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/blog/get-my-blog`,
      {
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteblog = async (id: any) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/v1/blog/delete-note/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
export const updateBlog = async (
  noteId: string,
  data: { title?: string; content?: string }
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/v1/blog/edit-note/${noteId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accToken}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error updating blog:", error);
    if (error.response) {
      // Server-side error
      throw new Error(error.response.data.message || "Server Error");
    } else {
      // Client-side error or network issue
      throw new Error("Network Error");
    }
  }
};
