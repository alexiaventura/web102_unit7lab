import { createClient } from '@supabase/supabase-js'

const URL = 'https://fhruhiwiqttjuhpwynov.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZocnVoaXdpcXR0anVocHd5bm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDQzNzUsImV4cCI6MjA2OTQyMDM3NX0.B0ClUuvYVFZbqLKBgbNhlWEYGqrmk-1TnobAi_ZQjEM'

export const supabase = createClient(URL, API_KEY)