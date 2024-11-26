import CreateProduct from "@/app/ui/products/create-products";
import { fetchCategory, fetchSuppliers } from '@/app/lib/data';
import Breadcrumbs from "@/app/ui/products/breadcrumbs";
export default async function Page() {
  const category = await fetchCategory();
  const supplier = await fetchSuppliers();
    return (
      <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/dashboard/products' },
          {
            label: 'Create Product',
            href: '/dashboard/products/create',
            active: true,
          },
        ]}
      />
        <CreateProduct categories={category} suppliers={supplier} />
      </>
    );
  }