import CategoryPage from "@/app/ui/dashboard/category/category";
import SubCategoryPage from "@/app/ui/dashboard/category/sub-category";
import { fetchCategory} from "@/app/lib/data";
import { requireAdminSession } from "@/app/lib/actions";
export default async function Page() {
  const session = await requireAdminSession();
  const categories = await fetchCategory();
    
    return (
        <>
         <CategoryPage />
         {/* <SubCategoryPage  /> */}
        
        </>
    )
  }