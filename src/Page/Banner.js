import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// getting the value from local storage
const getDataFrom = () => {
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Banner = () => {
  const [todos, setTodos] = useState([getDataFrom()]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setTodos([...todos, data]);
    reset();
  };

  // saving data to local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-gray-800">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-wrap items-center mx-auto max-w-7xl">
          <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <h2 className="text-4xl text-white mb-10">T0-do List</h2>
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div class="relative">
                  <div className="bg-green-500 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="card-body px-6 py-3">
                        <div className="form-control">
                          <label className="input-group input-group-sm pt-2">
                            <span className="bg-info text-white ">Name</span>
                            <input
                              {...register(`name`)}
                              className="input bg-base-300 input-sm w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded mb-2"
                              placeholder="Your name"
                              type="text"
                              required
                            />
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="input-group input-group-sm pt-2">
                            <span className="bg-info text-white ">Sector</span>
                            <select
                              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full  "
                              {...register("sector")}
                              placeholder="Pick one"
                              required
                            >
                              <option value=""></option>
                              <option value="Manufacturion">
                                Manufacturion
                              </option>
                              <option value="Food and Baverage">
                                Food and Baverage
                              </option>
                              <option value="Electronics">Electronics</option>
                              <option value="Bedroom">Bedroom</option>
                              <option value="kitchen">kitchen</option>
                              <option value="Living room">Living room</option>
                              <option value="Maritime">Maritime</option>
                              <option value="Other">Other</option>
                            </select>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="input-group input-group-sm pt-2">
                            <input
                              {...register(`check`)}
                              type="checkbox"
                              placeholder="Subject here"
                              class="mt-5"
                              required
                            />
                            <span className="bg-info text-white">
                              Agree to terms
                            </span>
                          </label>
                        </div>
                        <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-2  pt-2"></div>

                        <div className="card-actions justify-end pt-3">
                          <button
                            type="submit"
                            className=" btn w-14 btn-info text-black font-semibold bg-white rounded-lg"
                          >
                            <i className="fa-solid fa-paper-plane mr-1"></i>
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            {todos.length > 0 && (
              <div class="overflow-x-auto bg-green-500 rounded-lg mt-7">
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Index
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Name
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Sectors
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Button
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    {todos.map((todo) => (
                      <tr key={todo.isbn}>
                        <td>{todo.ines}</td>
                        <td>{todo.name}</td>
                        <td>{todo.sector}</td>
                        <td class="whitespace-nowrap px-4 py-2">
                          <a
                            href="#"
                            class="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {todos.length < 1 && (
              <div className="mx-auto text-red-600  ">No data added yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
