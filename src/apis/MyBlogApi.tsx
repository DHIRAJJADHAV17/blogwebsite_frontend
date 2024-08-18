import { commentData } from "@/app/blog/[id]/page";
import { BlogFormData } from "@/components/form/EditAddBlog";
import { useAppSelector } from "@/lib/store/hooks";
import axios from "axios";

const API_BASE_URL = "http://localhost:7000";

export const createBlog = async (data: BlogFormData) => {
  let accToken;
  const user = localStorage.getItem("user");
  if (user) {
    const acc = JSON.parse(user);
    accToken = acc.accessToken;
  } else {
    accToken = "no token";
  }

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
  let accToken;
  const user = localStorage.getItem("user");
  if (user) {
    const acc = JSON.parse(user);
    accToken = acc.accessToken;
  } else {
    accToken = "no token";
  }

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
  let accToken;
  const user = localStorage.getItem("user");
  if (user) {
    const acc = JSON.parse(user);
    accToken = acc.accessToken;
  } else {
    accToken = "no token";
  }

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
  let accToken;
  const user = localStorage.getItem("user");
  if (user) {
    const acc = JSON.parse(user);
    accToken = acc.accessToken;
  } else {
    accToken = "no token";
  }

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
  let accToken;
  const user = localStorage.getItem("user");
  if (user) {
    const acc = JSON.parse(user);
    accToken = acc.accessToken;
  } else {
    accToken = "no token";
  }

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
