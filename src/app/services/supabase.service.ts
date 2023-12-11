import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('https://hnkltjvfhndkihhzifea.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhua2x0anZmaG5ka2loaHppZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NTYzNzQsImV4cCI6MjAxNjMzMjM3NH0.IpzLTAXA4f9q3nWvMJOJwP_t6-1w54fqjG3UsIUx3kw');
  }

  getSupabase() {
    return this.supabase;
  }
}
