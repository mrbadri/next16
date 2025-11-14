import { z } from "zod";

const MOBILE_REGEX = /^09[0-9]{9}$/;

const MIN_NAME_LENGTH = 3;
const MIN_CAR_NAME_LENGTH = 2;

export const requestFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "نام و نام خانوادگی الزامی است")
    .min(MIN_NAME_LENGTH, "نام و نام خانوادگی باید حداقل 3 کاراکتر باشد"),
  requestedCar: z
    .string()
    .min(1, "خودروی درخواستی الزامی است")
    .min(MIN_CAR_NAME_LENGTH, "لطفاً نام خودرو را وارد کنید"),
  mobileNumber: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(MOBILE_REGEX, "شماره موبایل باید با 09 شروع شده و 11 رقم باشد"),
});

export type RequestFormData = z.infer<typeof requestFormSchema>;
