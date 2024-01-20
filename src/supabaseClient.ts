import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://maxkhaaggntmnwophfhx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1heGtoYWFnZ250bW53b3BoZmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NjU1MTksImV4cCI6MjAyMTM0MTUxOX0.P5YVANpjihKLQoT0IMeuGAUhqymPS2PiYTgQaDAbv3E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)