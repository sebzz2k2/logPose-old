// import Button from "@/components/Button";
// import { Toaster } from "@/components/Toast/Toaster";
// import Chip from "@/components/Chip";
// import { Modal, ModalBody, ModalHeader } from "./components/Modal";
// import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/Table";
import { DataTable } from "./components/DataTable";
import { Payment, columns } from "./components/Col";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

// import Input from "@/components/Input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/Select";

// import Card from "@/components/Cards";
// import { useToast } from "./components/Toast/useToast";
// import { ToastAction } from "./components/Toast/Toast";

function App() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "72852f",
      amount: 100,
      status: "pending",
      email: "wsd@ja.com",
    },
    {
      id: "728e52f",
      amount: 100,
      status: "pending",
      email: "sas@jnlkj",
    },
    // ...
  ];
  // const { toast } = useToast();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return <DataTable columns={columns} data={data} />;
}

export default App;
