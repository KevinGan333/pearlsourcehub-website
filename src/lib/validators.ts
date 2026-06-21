import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  company: z.string().max(200).optional().default(""),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  website: z.string().max(0, "Invalid submission").optional().default(""),
});

export const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  company: z.string().max(200).optional().default(""),
  country: z.string().min(1, "Country is required").max(100),
  productCategory: z.string().min(1, "Product category is required"),
  targetMarket: z.string().max(200).optional().default(""),
  estimatedOrderQuantity: z.string().max(100).optional().default(""),
  oemOdmRequirement: z.string().max(100).optional().default(""),
  currentStage: z.string().min(1, "Current stage is required"),
  mainConcern: z.string().min(1, "Main concern is required"),
  targetPrice: z.string().max(200).optional().default(""),
  message: z.string().min(10, "Project details must be at least 10 characters").max(10000),
  website: z.string().max(0, "Invalid submission").optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
