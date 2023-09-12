import { MaterialQuery } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_ENDPOINT || "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query Materials {
            materials{
              data{
                id
                attributes{
                  name
                  asset{
                    data{
                      id
                      attributes{
                        url
                      }
                    }
                  }
                  preview{
                    data{
                      id
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
            }
          }`,
        }),
      }
    );

    const json = await response.json();
    const data  = json.data.materials.data as MaterialQuery[];
    return NextResponse.json([...data ], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
