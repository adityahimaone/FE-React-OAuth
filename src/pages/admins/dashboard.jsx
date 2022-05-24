import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function Dashboard() {
  const [drawer, setDrawer] = useState(false);
  return <AdminLayout>Content</AdminLayout>;
}

export default Dashboard;
