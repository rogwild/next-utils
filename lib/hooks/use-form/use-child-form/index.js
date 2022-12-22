import React, { useMemo, useEffect } from "react";
import useForm from "../index";

export default function useChildForm({
  inputsConfig,
  setParentErrors = () => {},
  setSubmitPipe = () => {},
  setParentInputs = () => {},
  inputPropsType,
  setParentFiles = () => {},
}) {
  const { inputsValues, errors, onSubmit, inputs, files, setInputsValues } =
    useForm({
      inputsConfig,
      inputPropsType,
    });

  const submitId = useMemo(() => {
    return `${(Math.random() * 1000000).toFixed(0)}`;
  }, []);

  useEffect(() => {
    setParentErrors(errors);
  }, [errors]);

  useEffect(() => {
    setSubmitPipe((prev) => ({ ...prev, [submitId]: onSubmit }));
  }, [onSubmit]);

  const onDelete = () => {
    setSubmitPipe((prev) => {
      const newSubmitPipes = { ...prev };
      delete newSubmitPipes[submitId];
      return newSubmitPipes;
    });
  };

  useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ inputsValues`, inputsValues);
    setParentErrors(null);
    setParentInputs(inputsValues);
  }, [inputsValues]);

  useEffect(() => {
    setParentErrors(null);
    // console.log(`🚀 ~ useEffect ~ setParentFiles files Stage`, files);
    setParentFiles(files);
  }, [files]);

  return {
    inputsValues,
    setInputsValues,
    onSubmit,
    inputs,
    files,
    onDelete,
    errors,
  };
}
