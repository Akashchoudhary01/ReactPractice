const todoKey = "Availabletodo";

// Save todos to localStorage
export const setTodoDataToLocalStorage = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};

// Get todos from localStorage
export const getTodoDataFromLocalStorage = () => {
  const getData = localStorage.getItem(todoKey);
  if (!getData) return [];  // return empty array if nothing saved
  return JSON.parse(getData);
};
