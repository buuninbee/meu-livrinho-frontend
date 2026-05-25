import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://vknwqkblxlyaedbnigwc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbndxa2JseGx5YWVkYm5pZ3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4OTAyNjEsImV4cCI6MjA5MjQ2NjI2MX0.a0yrFDMMGIS4-lDd_RFaSo4xK67c2l3FP4Vq7TwR1VQ"
);
