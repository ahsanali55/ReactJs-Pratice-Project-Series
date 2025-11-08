import React from 'react'
const admin = [
  {
    
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    
  }
];

const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update company website",
        description: "Redesign homepage and fix mobile layout issues.",
        date: "2025-11-05",
        category: "Web Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare report",
        description: "Create monthly performance report for October.",
        date: "2025-10-30",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Test new feature",
        description: "Check the login system and fix validation bugs.",
        date: "2025-11-06",
        category: "Testing",
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Hassan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design logo",
        description: "Create a new logo for marketing campaign.",
        date: "2025-11-04",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Edit product images",
        description: "Crop and enhance product photos for catalog.",
        date: "2025-10-25",
        category: "Media",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Social media plan",
        description: "Plan and schedule posts for next week.",
        date: "2025-11-07",
        category: "Marketing",
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 3,
    firstName: "Zain",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix API bugs",
        description: "Debug the issue with user authentication API.",
        date: "2025-11-05",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        title: "Optimize database",
        description: "Add indexes and remove unused columns.",
        date: "2025-10-29",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Review PRs",
        description: "Check pull requests from junior developers.",
        date: "2025-11-06",
        category: "Code Review",
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstName: "Rehan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        title: "Setup CI/CD",
        description: "Implement CI/CD pipeline for project repo.",
        date: "2025-11-05",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Server maintenance",
        description: "Check uptime and restart backup services.",
        date: "2025-10-28",
        category: "Infrastructure",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add logging",
        description: "Integrate Winston logger in Node.js app.",
        date: "2025-11-07",
        category: "Backend",
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 5,
    firstName: "Ahsan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer feedback analysis",
        description: "Read and summarize customer feedback emails.",
        date: "2025-11-05",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        title: "Prepare presentation",
        description: "Make PowerPoint slides for weekly meeting.",
        date: "2025-10-27",
        category: "Presentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Market competitor study",
        description: "Compare pricing and features of rival products.",
        date: "2025-11-08",
        category: "Analysis",
      },
    ],
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin))

}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"))
  
  return {employees, admin};
}


