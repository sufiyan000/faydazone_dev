import { Table } from "antd";
import Breadcrumbs from '@/app/ui/dashboard/invoices/breadcrumbs';
import { Button } from "@/app/ui/button";
import Link from "next/link";
export default async function Page() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
    return (
       <main>
         <Breadcrumbs
              breadcrumbs={[
                { label: 'Sub-Category', href: '/dashboard/category/sub-category' },
                {
                  label: 'Sub-Level',
                  href: '/dashboard/category/sub-category/sub-level',
                  active: true,
                },  
              ]}
            />
            <div className="flex gap-3">
              <Button><Link href={"/dashboard/category/sub-category/sub-level/add"}>Add Sub-Level</Link></Button>
            </div>
        <Table dataSource={dataSource} columns={columns} />;

       </main>
    )
  }