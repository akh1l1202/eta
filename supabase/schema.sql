-- Supabase schema for Team Eta crowdfunding
-- Users table: store required fields for crowdfunding and Razorpay
create extension if not exists pgcrypto;

create table if not exists users (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null unique,
  mobile text not null,
  razorpay_customer_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Orders table: store crowdfunding orders / payments
create table if not exists orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references users(id) on delete set null,
  amount numeric not null,
  currency text default 'INR',
  razorpay_order_id text,
  created_at timestamptz default now()
);
