import React from "react";
import { useForm } from "react-hook-form";

function Teste() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  //const watchShowAge = watch("showAge", false); // you can supply default value as second argument
  // const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  // const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names
  function checkIfAllValuesAreFilled(obj) {
    for (let key in obj) {
      if (!obj[key]) {
        return false;
      }
    }
    return true;
  }

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);


  const onSubmit = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
       
      
        <input type="text"  {...register("teste")} />
        <input  {...register("eae")} />
        <input  {...register("fone")} />
      </form>
    </>
  );
}

export default Teste