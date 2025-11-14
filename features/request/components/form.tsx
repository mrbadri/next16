"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { requestFormSchema, type RequestFormData } from "@/features/request";
import { Button } from "@/components/ui/atoms/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/atoms/field";
import { Input } from "@/components/ui/atoms/input";

const ERROR_MESSAGE = "خطا در ارسال درخواست. لطفاً دوباره تلاش کنید.";
const FORM_TITLE = "لطفاً فرم زیر را تکمیل نمایید.";
const FORM_DESCRIPTION =
  "با تکمیل این فرم، مشاوران فروش ما در اسرع وقت جهت مشاوره خرید خودرو و ارائه اطلاعات تکمیلی با شما تماس خواهند گرفت.";
const SUBMIT_BUTTON_TEXT = "ارسال درخواست";
const SUBMITTING_BUTTON_TEXT = "در حال ارسال...";
const SUCCESS_TITLE = "درخواست شما با موفقیت ثبت شد!";
const SUCCESS_SUBTITLE = "مشاوران ما به زودی با شما تماس خواهند گرفت.";
const BACK_BUTTON_TEXT = "ارسال درخواست جدید";

export function RequestForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestFormSchema),
  });

  const onSubmit = async (data: RequestFormData) => {
    try {
      // TODO: Replace with your actual API endpoint
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(ERROR_MESSAGE);
    }
  };

  const handleBack = () => {
    setIsSuccess(false);
  };

  return (
    <div className="relative min-h-[500px]">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <FieldSet>
                  <FieldLegend className="text-center">
                    {FORM_TITLE}
                  </FieldLegend>
                  <FieldDescription className="text-center">
                    {FORM_DESCRIPTION}
                  </FieldDescription>
                  <FieldGroup>
                    <Field>
                      {errors.fullName ? (
                        <FieldDescription className="text-red-600">
                          {errors.fullName.message}!
                        </FieldDescription>
                      ) : (
                        <FieldLabel htmlFor="fullName">
                          نام و نام خانوادگی
                        </FieldLabel>
                      )}
                      <Input
                        id="fullName"
                        placeholder="نام و نام خانوادگی"
                        {...register("fullName")}
                      />
                    </Field>
                    <Field>
                      {errors.requestedCar ? (
                        <FieldDescription className="text-red-600">
                          {errors.requestedCar.message}!
                        </FieldDescription>
                      ) : (
                        <FieldLabel htmlFor="requestedCar">
                          خودروی درخواستی
                        </FieldLabel>
                      )}
                      <Input
                        id="requestedCar"
                        placeholder="خودروی درخواستی"
                        {...register("requestedCar")}
                      />
                    </Field>
                    <Field>
                      {errors.mobileNumber ? (
                        <FieldDescription className="text-red-600">
                          {errors.mobileNumber.message}!
                        </FieldDescription>
                      ) : (
                        <FieldLabel htmlFor="mobileNumber">
                          شماره موبایل
                        </FieldLabel>
                      )}
                      <Input
                        id="mobileNumber"
                        placeholder="شماره موبایل"
                        {...register("mobileNumber")}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>

                <Field orientation="horizontal" className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-linear-to-b to-[#B50909] from-[#C91B1C] px-16 py-8 text-md relative"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? SUBMITTING_BUTTON_TEXT : SUBMIT_BUTTON_TEXT}
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16 px-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <svg
                className="w-24 h-24 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-center mb-4 text-green-600"
            >
              {SUCCESS_TITLE}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center text-gray-600 mb-8 max-w-md"
            >
              {SUCCESS_SUBTITLE}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={handleBack}
                className="bg-linear-to-b to-[#B50909] from-[#C91B1C] px-16 py-8 text-md relative"
                size="lg"
              >
                {BACK_BUTTON_TEXT}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
