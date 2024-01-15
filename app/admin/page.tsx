'use client'
import React from 'react';
import { revenue } from '../lib/data';
import Card from '../_components/admin/Card';
import RevenueChart from '../_components/admin/RevenueChart';
// import WithAuth from '../../../_components/auth/WithAuth'

function HomePage() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Admin Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card title="Collected" value="15" type="collected" />
      <Card title="Pending" value="9" type="pending" />
      <Card title="Total Invoices" value="15" type="invoices" />
      <Card title="Total Customers" value="100" type="customers"
      /> 
      </div>
        <div className="">
          <RevenueChart revenue={revenue} />
      </div>
    </main>
  );
}

export default HomePage;