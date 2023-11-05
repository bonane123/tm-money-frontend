import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pkthjyxjaozapfjqpmep.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrdGhqeXhqYW96YXBmanFwbWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NzUyNjYsImV4cCI6MjAwNTQ1MTI2Nn0.E88draT2vNWGb_srOG0rJuOk1rt9NYnM76Mpn9ERd00';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
