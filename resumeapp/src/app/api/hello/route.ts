
import { NextRequest, NextResponse } from "next/server"
//http://localhost:3000/api/hello?name=anees
//https://github.com/panaverse/learn-nextjs/tree/main/step11_route_handler
//https://github.com/panaverse/learn-nextjs/tree/main/step12_serverless_databases/relational/step00_helloworld
export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("name")){
    const name = url.searchParams.get("name");
    return NextResponse.json({message: "Hello, from" + name})

  }
  else {
    return new NextResponse("Please ssend your nae in search parameter 'name'");
  }
}
