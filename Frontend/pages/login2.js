import { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Webcam from "react-webcam";
import { useEffect } from "react";

export default function Login() {
  const schema = yup
    .object()
    .shape({
      email: yup.string().required(),
      password: yup.string().min(4).max(15).required(),
    })
    .required();

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const [result, setResult] = useState();
  const [boolMask, setBoolmask] = useState()

  const bool = false

  let videoRef = useRef();
  let refButton = useRef();
  const imgURL = "https://teachablemachine.withgoogle.com/models/f3rdJMbyh/model.json";

    let detectInterval;
    useEffect(() => {
      const ml5 = require("ml5");
      const modelLoaded = () => {
        console.log('model ready')
          refButton.current.onclick = () => {
            detect()
          }
        };
        const classifier = ml5.imageClassifier(imgURL, modelLoaded);

    const detect = () => {
      console.log('video detect')
      classifier.classify(videoRef.current.video, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results[0].label);
        if(results[0].label === "Mask"){
          setBoolmask(true)
        }else{
          setBoolmask(false)
        }
      });

    };

    return () => {
      if (detectInterval) {
        clearInterval(detectInterval);
      }
    };
  },[]);
  console.log(result)

  return (
    <div className="">
        <section className=" flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 ">
          <div className=" w-[300px]">
            <div className="mb-6">
              <Webcam ref={videoRef} mirrored={true} width={100+"%"} style={{ display: "block" }} audio={false} video={"true"} />
              <button ref={refButton} className=" font-bold text-center w-full">CLASSIFY</button>
            </div>
            <form
              id="form1"
              onSubmit={handleSubmit(async (d) => {
                const res = await axios.post("http://127.0.0.1:8000/users/login",{...d,masker:boolMask})
                console.log(res.data)
                
                console.log({masker:boolMask,...d});
                // console.log(errors)
              })}
            >
              <div className="relative mb-[14px]">
                <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Email</p>
                <input {...register("email")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
                <p>{errors.email?.message}</p>
              </div>
              <div className="relative mb-[14px]">
                <p className=" text-[12px] absolute -top-[10px] left-[26px] px-1 bg-white">Password</p>
                <input {...register("password")} className=" rounded-[20px] border border-solid w-full h-[40px] border-[#6E7076] px-[34px] mb-[10px]" />
                <p>{errors.password?.message}</p>
              </div>
              <input type="submit" className=" rounded-[20px] border-solid w-full h-[40px] bg-[#2CD5D9] px-[34px] mb-[10px] text-white" value={"next"} disabled={boolMask?false:true} />
            </form>
          </div>
      </section>
    </div>
  );
}
