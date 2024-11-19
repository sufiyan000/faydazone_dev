import { NextResponse } from "next/server";
import connectMongo from "@/app/lib/mongodb";
import SubCategory from "@/app/schema/subCategorySchema";
export async function POST(request: Request) {
    await connectMongo();
    const data = await request.json();
  
    try{
        const subCat = new SubCategory(data);
        await subCat.save();
        return NextResponse.json({status: "success",statusCode:200,message:"Sub-Category added successfully",subCat},{status:200});
    }
    catch(err: any) {
        return NextResponse.json({status: "error", statusCode: 400, message: err.message}, {status: 400});
    }
}

export async function DELETE(request: Request) {
    await connectMongo();
    const {id} = await request.json();
  
    try{
        const deletedCategory = await SubCategory.findByIdAndDelete(id);

        if (!deletedCategory) {
            return NextResponse.json({status: "success",statusCode:404,message:"Category not found"},{status:404});
          
        }
        
        return NextResponse.json({status: "success",statusCode:200,message:"Category deleted successfully",data:deletedCategory},{status:200});
    }
    catch(err: any) {
        return NextResponse.json({status: "error", statusCode: 500, message: err.message}, {status: 500});
    }
}

export async function PUT(request: Request){
    await connectMongo();
    try{
        const {data} = await request.json();
        const datas = {
            name: data.name,
            description: data.description,
            categoryId: data.categoryId,
        }
        const update = await SubCategory.findByIdAndUpdate(data.id, data, { new: true });
        if(!update) return NextResponse.json({success:false, message:"Category Not Found"},{status:404});
        return NextResponse.json({success:true,updatedData:update},{status:200});
    }
    catch (err) {
        return NextResponse.json({success:false,err},{status:404});
    }
}

export async function GET(request: Request) {
    await connectMongo();
     
    try{
        const categories = await SubCategory.find({}, 'name description _id');
        return NextResponse.json({status: "success",statusCode:200,message:"Categories fetched successfully",categories},{status:200});
    }
    catch(err: any) {
        return NextResponse.json({status: "error", statusCode: 400, message: err.message}, {status: 400});
    }
}