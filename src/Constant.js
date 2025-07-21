export const FUNCTIONS_URL = {
  GET_PART: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchPart" : "http://127.0.0.1:54321/functions/v1/training_record/fetchPart",
  GET_MENU: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchMenu" : "http://127.0.0.1:54321/functions/v1/training_record/fetchMenu",
  POST_RECORD: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/insertRecord" : "http://127.0.0.1:54321/functions/v1/training_record/insertRecord",
  GET_RECORDS: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchRecords" : "http://127.0.0.1:54321/functions/v1/training_record/fetchRecords",
  POST_MENU: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/insertMenu" : "http://127.0.0.1:54321/functions/v1/training_record/insertMenu",
  DELETE_RECORD: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/deleteRecord" : "http://127.0.0.1:54321/functions/v1/training_record/deleteRecord",
  GET_OLD_PART: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchOldPart" : "http://127.0.0.1:54321/functions/v1/training_record/fetchOldPart",
  GET_OLD_MENU: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchOldMenu" : "http://127.0.0.1:54321/functions/v1/training_record/fetchOldMenu",
  GET_OLD_RECORDS: process.env.NODE_ENV === 'production' ? "https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchOldRecords" : "http://127.0.0.1:54321/functions/v1/training_record/fetchOldRecords",
  AUTHORIZATION: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
};