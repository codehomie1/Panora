import { useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { DataTable } from "@/components/shared/data-table";
import { MAPPINGS } from "../data/mappings";
import { columns } from "./columns";

export interface Mapping {
  standard_object: string; 
  source_app: string; 
  status: string;  
  category: string; 
  source_field: string;
  destination_field: string;
  data_type: string;
  date: string;
}

export default function FieldMappingsTable() {
  const [mappings, setMappings] = useState<Mapping[]>();

  useEffect(() => {
    async function loadMappings() {
      setMappings(MAPPINGS);
    }

    loadMappings();
  }, []);
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
      <div className="flex items-center space-x-4 justify-between flex-row">
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle>Defined</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-4xl font-bold">0</p>
            </CardContent>

        </Card>
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle>Mapped</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold">3</p>
            </CardContent>
        </Card>                  
        </div>
        {mappings && <DataTable data={mappings} columns={columns} />}
      </div>
    </>
  )
}