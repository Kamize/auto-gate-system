import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const schema = yup
    .object()
    .shape({
      namabelakang: yup.string().required(),
      namadepan: yup.string().required("ga boleh kosong goblok"),
      nomor_telepon: yup.number().required(),
      gender: yup.bool().required().oneOf([true,false]),
      birthdate: yup.string().required(),
      // gender: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(4).max(15).required(),
      confirmpassword: yup.string().oneOf([yup.ref("password")],null),
      username: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const posts = {namadepan:'opal',namabelakang:'nopal'}

  return (
    <section className=" flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 ">
      <div className=" w-[300px]">
        <form
          id="form1"
          onSubmit={handleSubmit((d) => {
                axios.post("http://127.0.0.1:8000/users",d)
                .then(data => console.log(data))
                // console.log(d)
            }
          )}
        >
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">First Name</p>
            <input {...register("namadepan")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
            <p>{errors.namadepan?.message}</p>
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Last Name</p>
            <input {...register("namabelakang")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">email</p>
            <input {...register("email")} placeholder="password" className=" invalid:border-red-600 rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" ">gender</p>
            <input type={"radio"} {...register("gender")} placeholder="password" className=" inline-block w-[50px] h-[50px]" />
            <input type={"radio"} {...register("gender")} value={false} placeholder="password" className=" inline-block w-[50px] h-[50px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" ">birthdate</p>
            <input {...register("birthdate")} placeholder="password" className=" inline-block w-[50px] h-[50px]" />
          </div>
          {/* <div className="relative mb-[14px]">
            <p className=" ">gender</p>
            <input {...register("gender")} placeholder="password" className=" inline-block w-[50px] h-[50px]" />
          </div> */}
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Phone Number</p>
            <input {...register("nomor_telepon")} name="nomor_telepon" placeholder="password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">username</p>
            <input {...register("username")} name="username" placeholder="password" className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">password</p>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <div className="relative mb-[14px]">
            <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">password</p>
            <input
              {...register("confirmpassword")}
              type="password"
              placeholder="password"
              className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
          </div>
          <input type="submit" className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white" value={"next"} />
        </form>
      </div>
    </section>
  );
}