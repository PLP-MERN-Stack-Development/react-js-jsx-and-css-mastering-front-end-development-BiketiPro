import React from "react";
import Card from "../components/Card";

const Support = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Help & Support</h2>
      <Card title="How to Add Tasks" content="Use the input field on the Tasks page and click 'Add Task'." />
      <Card title="Marking Tasks Complete" content="Click the 'Complete' button next to each task." />
      <Card title="Deleting Tasks" content="Click the 'Delete' button to remove tasks permanently." />
    </div>
  );
};

export default Support;
