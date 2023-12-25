import React from "react";

const useForm = (initialState = {},) => {
  const [formData, setFormData] = React.useState<{}>(
    initialState
  );

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const setNewState = (newState: {}) => {
    setFormData(newState)
  }
  return { formData, handleInputChange, setNewState };
};

export default useForm;
