import axios from "axios";

export const careerApi = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

export const careerApiById = async ({ params }) => {
  const { id } = params;
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/todos/" + id)
    .catch((err) => {
      throw Error(err.message);
    });
  return response.data;
};
