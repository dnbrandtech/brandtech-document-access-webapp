const INITIAL_DOCUMENTS = [
  { id: "d1", title: "Safety Manual 2024", type: "PDF", category: "Safety", uploadedDate: "Jan 10, 2024", size: "2.4 MB", uploadedBy: "Admin User" },
  { id: "d2", title: "Project Specifications Q1 2024", type: "PDF", category: "Technical", uploadedDate: "Jan 08, 2024", size: "1.8 MB", uploadedBy: "Admin User" },
  { id: "d3", title: "Equipment Compliance Report", type: "PDF", category: "Compliance", uploadedDate: "Jan 05, 2024", size: "3.1 MB", uploadedBy: "Admin User" },
  { id: "d4", title: "Site Inspection Guidelines", type: "PDF", category: "Operations", uploadedDate: "Dec 20, 2023", size: "0.9 MB", uploadedBy: "Admin User" },
  { id: "d5", title: "Scaffolding Design Specifications", type: "PDF", category: "Technical", uploadedDate: "Dec 15, 2023", size: "4.2 MB", uploadedBy: "Admin User" },
  { id: "d6", title: "Environmental Compliance 2024", type: "PDF", category: "Compliance", uploadedDate: "Jan 12, 2024", size: "1.5 MB", uploadedBy: "Admin User" }
];
const INITIAL_REQUESTS = [
  { id: "r1", customerId: "2", customerName: "John Smith", company: "Acme Corp", documentId: "d1", documentTitle: "Safety Manual 2024", dateRequested: "Jan 15, 2024", status: "pending" },
  { id: "r2", customerId: "3", customerName: "Sarah Johnson", company: "BuildTech LLC", documentId: "d2", documentTitle: "Project Specifications Q1 2024", dateRequested: "Jan 14, 2024", status: "approved" },
  { id: "r3", customerId: "2", customerName: "John Smith", company: "Acme Corp", documentId: "d3", documentTitle: "Equipment Compliance Report", dateRequested: "Jan 13, 2024", status: "denied" },
  { id: "r4", customerId: "3", customerName: "Sarah Johnson", company: "BuildTech LLC", documentId: "d4", documentTitle: "Site Inspection Guidelines", dateRequested: "Jan 12, 2024", status: "approved" },
  { id: "r5", customerId: "2", customerName: "John Smith", company: "Acme Corp", documentId: "d5", documentTitle: "Scaffolding Design Specifications", dateRequested: "Jan 11, 2024", status: "pending" }
];
const INITIAL_AUDIT = [
  { id: "a1", customer: "Sarah Johnson", company: "BuildTech LLC", document: "Project Specifications Q1 2024", action: "Access Granted", admin: "Admin User", timestamp: "Jan 14, 2024 14:32", requestId: "r2" },
  { id: "a2", customer: "John Smith", company: "Acme Corp", document: "Equipment Compliance Report", action: "Access Denied", admin: "Admin User", timestamp: "Jan 13, 2024 11:15", requestId: "r3" },
  { id: "a3", customer: "Sarah Johnson", company: "BuildTech LLC", document: "Site Inspection Guidelines", action: "Access Granted", admin: "Admin User", timestamp: "Jan 12, 2024 09:45", requestId: "r4" },
  { id: "a4", customer: "John Smith", company: "Acme Corp", document: "Safety Manual 2022", action: "Access Revoked", admin: "Admin User", timestamp: "Jan 10, 2024 16:22", requestId: "" }
];
const INITIAL_NOTIFICATIONS = [
  { id: "n1", type: "approved", message: "Your request for Project Specifications Q1 2024 has been approved.", document: "Project Specifications Q1 2024", timestamp: "Jan 14, 2024 14:32", read: false },
  { id: "n2", type: "denied", message: "Your request for Equipment Compliance Report was denied.", document: "Equipment Compliance Report", timestamp: "Jan 13, 2024 11:15", read: true },
  { id: "n3", type: "approved", message: "Your request for Site Inspection Guidelines has been approved.", document: "Site Inspection Guidelines", timestamp: "Jan 12, 2024 09:45", read: true }
];
export {
  INITIAL_AUDIT,
  INITIAL_DOCUMENTS,
  INITIAL_NOTIFICATIONS,
  INITIAL_REQUESTS
};
