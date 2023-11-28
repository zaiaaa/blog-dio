import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://pgnxqcqywnxokgyhfdzy.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnbnhxY3F5d254b2tneWhmZHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMzI1NTIsImV4cCI6MjAxNjcwODU1Mn0.HcFobj2ZagnlHeTmMUAWum_nXacz5SrvlJRTw4ad9HQ",
        authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnbnhxY3F5d254b2tneWhmZHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMzI1NTIsImV4cCI6MjAxNjcwODU1Mn0.HcFobj2ZagnlHeTmMUAWum_nXacz5SrvlJRTw4ad9HQ"
    }
})