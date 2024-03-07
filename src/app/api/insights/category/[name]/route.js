import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const GET = async (req, { params }) => {
    try {
        const name = params.name
        const category = await prisma.insightsCategories.findFirst({
            where: { name: name },
            include: {
                insights: true, // Include the related blogs
            },
        })
        console.log(category)
        if (!category) {
            throw new Error("Failed to fetch the categoryblogs Category does not exist");
        }
        return NextResponse.json({categoryName:category.name, blogs: category.insights }, { status: 200 })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};
