import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Banner = () => {
  const [todos, setTodos] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setTodos([...todos, data]);
    reset();
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <div>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
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
                              <span className="bg-info text-white ">
                                Sector
                              </span>
                              <select
                                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full  "
                                {...register("sector")}
                                placeholder="Pick one"
                                required
                              >
                                <option value=""></option>
                                <option value="04:00 PM">Manufacturion</option>
                                <option value="09:00 PM">
                                  Food and Baverage
                                </option>
                                <option value="10:00 PM">Electronics</option>
                                <option value="10:00 PM">Bedroom</option>
                                <option value="10:00 PM">kitchen</option>
                                <option value="10:00 PM">Living room</option>
                                <option value="10:00 PM">Maritime</option>
                                <option value="10:00 PM">Other</option>
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
              <div class="overflow-x-auto bg-green-500 rounded-lg mb-10">
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Name
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Date of Birth
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Role
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Salary
                      </th>
                      <th class="px-4 py-2"></th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        John Doe
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        24/05/1995
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        Web Developer
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        $120,000
                      </td>
                      <td class="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Jane Doe
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        04/11/1980
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        Web Designer
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        $100,000
                      </td>
                      <td class="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Gary Barlow
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        24/05/1995
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        Singer
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        $20,000
                      </td>
                      <td class="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          class="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
