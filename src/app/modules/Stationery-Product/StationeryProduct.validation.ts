import { z } from 'zod';

export const stationeryProductSchema = z.object({
  name: z.string().trim().min(1, "The 'name' field is required."),
  brand: z.string().trim().min(1, "The 'brand' field is required."),
  price: z.number().min(0, "The 'price' field must be a non-negative number."),
  category: z
    .enum([
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ])
    ,
  description: z.string().trim().min(1, "The 'description' field is required."),
  quantity: z
    .number()
    .int()
    .min(0, "The 'quantity' field must be a non-negative integer."),
  inStock: z.boolean(),
});
