import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
import { api } from "~/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "./Spinner";
import Button from "./Button";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  companyApplied: string;
  companyName: string;
}

const RegisterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  gender: z.enum(["Male", "Female"]),
  company: z.string().min(2, "Company is required"),
  jobDesc: z.string().min(2, "Job Description is required"),
  email: z.string().email("Invalid Email"),
  phone: z.string().min(1, "Phone is required"),
  time: z.string(),
});

export default function Modall({
  showModal,
  setShowModal,
  companyApplied,
  companyName,
}: Props) {
  const book = api.user.book.useMutation({
    onError: (e) => {
      setTimeout(() => {
        toast.error(e.message);
      }, 0);
    },
    onSuccess: async () => {
      setTimeout(() => {
        toast.success("Registered successfully.");
      }, 0);

      await refetch();
      reset();

      setShowModal(false);
    },
  });

  const {
    data: avilableTimes,
    isLoading,
    refetch,
  } = api.user.avilableTimes.useQuery(companyApplied);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = handleSubmit((data) => {
    book.mutate({
      ...data,
      time: new Date(parseInt(data.time)),
      companyApplied,
      companyName,
    });
  });

  return (
    <>
      {showModal ? (
        <>
          {isLoading || book.isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                <div className="relative mx-auto my-6 h-screen w-full max-w-3xl  ">
                  {/*content*/}
                  <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                      <h3 className="text-3xl font-semibold">Event Booking</h3>
                      <button
                        className="text-4xl font-semibold leading-none text-red-500 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        ×
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative flex-auto p-6">
                      <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
                        <form
                          onSubmit={(e) => void onSubmit(e)}
                          className="space-y-4"
                        >
                          <div>
                            <label>Time</label>

                            <select
                              className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none "
                              {...register("time")}
                            >
                              {avilableTimes?.map((time, index) => (
                                <option
                                  key={index}
                                  className="text-lg"
                                  value={new Date(time).getTime().toString()}
                                >
                                  {new Date(time).toLocaleTimeString()}
                                </option>
                              ))}
                            </select>

                            {errors && errors.time && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.time.message}
                              </p>
                            )}
                          </div>

                          {/* Name & Gender */}
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="name">Name</label>
                              <input
                                className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none"
                                type="text"
                                placeholder="John Doe"
                                {...register("name")}
                              />
                              {errors && errors.name && (
                                <p className="mt-2 text-sm text-red-500">
                                  {errors.name.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label>Gender</label>

                              <select
                                className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none "
                                {...register("gender")}
                              >
                                <option className="text-lg" value="Male">
                                  Male
                                </option>
                                <option className="text-lg" value="Female">
                                  Female
                                </option>
                              </select>

                              {errors && errors.gender && (
                                <p className="mt-2 text-sm text-red-500">
                                  {errors.gender.message}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Company & JobD */}
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label>Company</label>
                              <input
                                className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none"
                                type="text"
                                placeholder="Enter Your Company Name Here"
                                {...register("company")}
                              />
                              {errors && errors.company && (
                                <p className="mt-2 text-sm text-red-500">
                                  {errors.company.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label htmlFor="name">Job Description</label>
                              <input
                                className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none"
                                type="text"
                                placeholder="Enter Your Job Description Here"
                                {...register("jobDesc")}
                              />
                              {errors && errors.jobDesc && (
                                <p className="mt-2 text-sm text-red-500">
                                  {errors.jobDesc.message}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="email">Email</label>
                              <input
                                className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none"
                                placeholder="Email address"
                                type="email"
                                {...register("email")}
                              />
                              {errors && errors.email && (
                                <p className="mt-2 text-sm text-red-500">
                                  {errors.email.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label htmlFor="phone">Phone</label>
                              <input
                                className="mt-2 w-full rounded-lg  border-2 border-gray-300 p-3 text-sm focus:border-purple-500 focus:outline-none"
                                placeholder="Phone Number"
                                type="number"
                                {...register("phone")}
                              />
                              {errors && errors.phone && (
                                <p className="mt-2 text-sm text-red-500">
                                  {errors.phone.message}
                                </p>
                              )}
                            </div>
                          </div>

                          {/*footer*/}
                          <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 pt-6">
                            <button
                              className="background-transparent mb-1 mr-1  px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <Button
                              isFull={false}
                              isPrimary={true}
                              title="Submit"
                              disabled={book.isLoading || isLoading}
                              loading={book.isLoading || isLoading}
                              type="submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25 blur-md backdrop-blur-md"></div>

              <ToastContainer />
            </>
          )}
        </>
      ) : null}
    </>
  );
}
