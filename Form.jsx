import React, {useState} from "react";
import {useForm} from "react-hook-form";

function Form() {
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm();
  const [itemName, setItemName] = useState({});
  const submitData = (data) => {
    setItemName(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitData)} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
            pattern: /^([a-z])([A-Z])/i,
            minLength: 4,
          })}
        />
        {errors?.name?.type === "required" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        {errors?.name?.type === "pattern" && (
          <small className="text-red-500 pl-5">This pattern is required</small>
        )}
        {errors?.name?.type === "minLength" && (
          <small className="text-red-500 pl-5">Min-4</small>
        )}
        <input
          type="Password"
          placeholder="Password" 
          className="border border-slate-500 px-8 py-2"
          {...register("Password", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
          })}
        />
        {errors?.Password?.type === "required" && (
          <small className="text-red-500  pl-5">This field is required</small>
        )}
        {errors?.Password?.type === "pattern" && (
          <small className="text-red-500 pl-5">
            This pattern is required
          </small>
        )}
        <input
          type="tel"
          placeholder="Number"
          maxLength={10}
          className="border border-slate-500 px-8 py-2"
          {...register("number", {
            required: true,
            pattern: /[0-9]{10}/,
          })}
        />
        {errors?.number?.type === "required" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        {errors?.number?.type === "pattern" && (
          <small className="text-red-500 pl-5">This pattern required</small>
        )}

        <input
          type="text"
          placeholder="city"
          className="border border-slate-500 px-8 py-2"
          {...register("city", {
            required: true,
            pattern: /^([a-z])([A-Z])/i,
          })}
        />
        {errors?.city?.type === "required" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        {errors?.city?.type === "pattern" && (
          <small className="text-red-500 pl-5">This field is required</small>
        )}
        <div className="flex justify-normal">
          <label>
            hobbies :
            <label className="pr-4 pl-4">
              <input
                type="checkbox"
                value="Cricket"
                {...register("checkbox",{
                  required: true,
                })}
              />
              Cricket
            </label>
            <label className="pr-4">
              <input
                type="checkbox"
                value="Chess"
                {...register("checkbox", {
                  required: true,
                })}
              />
              Chess
            </label>
            <label className="pr-4">
              <input
                type="checkbox"
                value="Football"
                {...register("checkbox", {
                  required: true,
                })}
              />
              Football
            </label>
          </label>
        </div>
        {errors?.checkbox?.type === "required" && (
          <small className="text-red-500 pl-5">This checkbox is required</small>
        )}
        <div>
          Gender :
          <label className="pr-4 pl-4">
            <input
              type="radio"
              value="Male"
              {...register("radio", {
                required: true,
              })}
            />
            Male
          </label>
          <label className="pr-4">
            <input
              type="radio"
              value="Female"
              {...register("radio", {
                required: true,
              })}
            />
            Female
          </label>
          <label className="pr-4">
            <input
              type="radio"
              value="Other"
              {...register("radio", {
                required: true,
              })}
            />
            Other
          </label>
        </div>
        {errors?.radio?.type === "required" && (
          <small className="text-red-500 pl-5">This radio is required</small>
        )}

        <div className="flex">
          <label className="flex justify-center items-center pr-4">
            Address:
          </label>
          <textarea
            name="message"
            rows="5"
            cols="80"
            className="border-2 border-black w-100 "
            {...register("textarea", {
              required: true,
              minLength: 10,
            })}
          ></textarea>
        </div>
        {errors?.textarea?.type === "required" && (
          <small className="text-red-500 pl-5">This Address is required</small>
        )}
        {errors?.textarea?.type === "minLength" && (
          <small className="text-red-500 pl-5">minLength:10</small>
        )}

        <div>
          <label className="pr-5">Birthday (date and time):</label>
          <input
            type="datetime-local"
            className="border-2 border-black"
            {...register("datetime", {
              required: true,
            })}
          />
        </div>
        {errors?.datetime?.type === "required" && (
          <small className="text-red-500 pl-5">This datetime is required</small>
        )}

        <div>
          <label for="vol" className="pr-5">
            Volume :
          </label>
          <input
            type="range"
            defaultValue=""
            {...register("range", {
              required: true,
            })}
          />
        </div>
        {errors?.range?.type === "required" && (
          <small className="text-red-500 pl-5">This datetime is required</small>
        )}
        <div className="flex">
          <label className="pr-3">Choose a Car:</label>
          <select
            className="pl-5 border-2 border-black"
            defaultValue=""
            {...register("option", {
              required: true,
            })}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        {errors?.option?.type === "required" && (
          <small className="text-red-500 pl-5">This select is required</small>
        )}
        <button
          className="bg-orange-400 font-bold  text-white py-3 px-6 w-fit"
          type="submit"
        >
          Add
        </button>
      </form>
      {Object.keys(itemName).length !== 0 && (
        <table>
          <tr>
            <th>Name</th>
            <td>{itemName?.name}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{itemName?.Password}</td>
          </tr>
          <tr>
            <th>Number</th>
            <td>{itemName?.number}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{itemName?.city}</td>
          </tr>
          <tr>
            <th>hobbies</th>
            <td>{itemName?.checkbox}</td>
          </tr>
          <tr>
            <th>Gender </th>
            <td>{itemName?.radio}</td>
          </tr>
          <tr>
            <th>Address </th>
            <td>{itemName?.textarea}</td>
          </tr>
          <tr>
            <th>Birthday </th>
            <td>{itemName?.datetime}</td>
          </tr>
          <tr>
            <th>Car </th>
            <td>{itemName?.option}</td>
          </tr>
        </table>
      )}
    </>
  );
}

export default Form;
