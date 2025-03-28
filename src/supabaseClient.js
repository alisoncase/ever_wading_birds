import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // Use the environment variable
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or key is missing. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY in your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
