import { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { SideMenu } from "../../components/Admin/SideMenu";
import axiosClient from "../../utils/axiosClient";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [copiedUserId, setCopiedUserId] = useState(null);

  useEffect(() => {
    axiosClient
      .get("/auth/admin/allUsers")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleCopy = (user) => {
    const userInfo = {
      Name: user.username,
      "Contact Number": user.phoneNo,
      Email: user.email,
      Address: user.defaultAddress,
    };
    setCopiedUserId(user.id);
    navigator.clipboard.writeText(JSON.stringify(userInfo));
    console.log(JSON.stringify(userInfo));
  };

  useEffect(() => {
    if (copiedUserId !== null) {
      const timer = setTimeout(() => {
        setCopiedUserId(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copiedUserId]);

  return (
    <div className="w-full flex flex-row overflow-hidden relative">
      <SideMenu />

      <div className="p-6 w-full h-screen flex flex-col">
        <div className="mb-3 h-12">
          <p className="font-bold text-2xl">Users</p>
        </div>
        <div className="flex flex-col w-full h-full">
          <Table>
            <Table.Head>
              <Table.HeadCell className="w-1/12">Image</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Mobile No.</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Copy</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users &&
                users.map((user) => (
                  <Table.Row
                    key={user.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <img src={user.image} alt="" className="rounded-xl" />
                    </Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                    <Table.Cell>{user.phoneNo}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>
                      <div>
                        {user.defaultAddress &&
                          user.defaultAddress.split(",").map((line, idx) => (
                            <p key={idx}>
                              {line}
                              {idx !== user.defaultAddress.split(",").length - 1
                                ? ","
                                : ""}
                            </p>
                          ))}
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        className={`${
                          copiedUserId === user.id
                            ? "bg-gray-300"
                            : "bg-gray-100"
                        } w-7 h-7 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-300`}
                        onClick={() => handleCopy(user)}
                      >
                        {copiedUserId === user.id ? (
                          <LuCopyCheck />
                        ) : (
                          <LuCopy />
                        )}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
