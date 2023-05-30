import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  // creating schema of formData using zod for validation
  const schema = z.object({
    name: z.string().min(3, { message: "name must be atleast 3 chatecters" }),
    age: z.number({ invalid_type_error: "Age field is required" }).min(18),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:{" "}
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          type="Number"
          className="form-control"
          id="age"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
}

export default Form;
