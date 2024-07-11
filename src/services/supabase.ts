import { createClient } from "@supabase/supabase-js";
import { Database } from "../utils/database.generated";

export const supabaseUrl = "https://dwnavszoazxzffdtrhhm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bmF2c3pvYXp4emZmZHRyaGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MDQ2MjEsImV4cCI6MjAzNDM4MDYyMX0.Tadj3eCkgU9QWjiRNIxsSyZgmgqr246TbQzsfegE-Mg";
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const headersSupabase = {
  Apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bmF2c3pvYXp4emZmZHRyaGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MDQ2MjEsImV4cCI6MjAzNDM4MDYyMX0.Tadj3eCkgU9QWjiRNIxsSyZgmgqr246TbQzsfegE-Mg",
  "Content-Type": "application/json",
};
