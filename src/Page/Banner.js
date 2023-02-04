import React from "react";
import { useForm } from "react-hook-form";

const Banner = () => {
  const data = [{}];
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div class="w-full bg-white  ">
        <section>
          <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div class="flex flex-wrap items-center mx-auto max-w-7xl">
              <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                  <div class="relative w-full max-w-lg">
                    <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                    <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div class="relative">
                      <div className="bg-green-500">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="card-body px-6 py-3">
                            <div className="form-control">
                              <label className="input-group input-group-sm pt-2">
                                <span className="bg-info text-white ">
                                  Your Name
                                </span>
                                <input
                                  {...register(`name`)}
                                  className="input bg-base-300 input-sm w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg"
                                  placeholder="Your name"
                                  type="link"
                                  required
                                />
                              </label>
                            </div>
                            <div className="form-control">
                              <label className="input-group input-group-sm pt-2">
                                <span className="bg-info text-white ">
                                  Teacher
                                </span>
                                <input
                                  {...register(`sectors`)}
                                  type="text"
                                  placeholder="Teacher name"
                                  class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-8 px-4 block w-full appearance-none leading-normal"
                                  required
                                />
                              </label>
                            </div>
                            <div className="form-control">
                              <label className="input-group input-group-sm pt-2">
                                <span className="bg-info text-white">
                                  Agree to terms
                                </span>

                                <input
                                  {...register(`check`)}
                                  type="checkbox"
                                  placeholder="Subject here"
                                  class="checkbox"
                                  required
                                />
                              </label>
                            </div>
                            <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-2  pt-2"></div>

                            <div className="card-actions justify-end pt-3">
                              <button
                                type="submit"
                                className=" btn font-thin btn-sm btn-info text-white hover:bg-green-600"
                              >
                                <i className="fa-solid fa-paper-plane mr-1"></i>
                                Post
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
                <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                  {" "}
                  Your tagline{" "}
                </span>
                <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                  Medium length display headline.
                </h1>
                <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
                  Free and Premium themes, UI Kit's, templates and landing pages
                  built with Tailwind CSS, HTML &amp; Next.js.
                </p>
                <div class="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                  <form
                    action=""
                    method="post"
                    id="revue-form"
                    name="revue-form"
                    target="_blank"
                    class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
                  >
                    <div class="flex-1 min-w-0 revue-form-group">
                      <label for="member_email" class="sr-only">
                        Email address
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your email  "
                      />
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                      <button
                        type="submit"
                        value="Subscribe"
                        name="member[subscribe]"
                        id="member_submit"
                        class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                      >
                        Notify me
                      </button>
                    </div>
                  </form>
                  <div class="sm:max-w-lg sm:flex">
                    <p class="mt-3 text-xs text-gray-500">
                      By subscribing, you agree with Revue’s
                      <a target="_blank" href="https://www.getrevue.co/terms">
                        Terms of Service
                      </a>
                      and
                      <a target="_blank" href="https://www.getrevue.co/privacy">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
