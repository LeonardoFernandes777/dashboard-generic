import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Package, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-16 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                  Total de vendas
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total vendas em 90 dias
              </CardDescription>

            </CardHeader>
            <CardContent>
                <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
              </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                  Novos clientes
                </CardTitle>
                <Users className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Novos clientes em 30 dias
              </CardDescription>

            </CardHeader>
            <CardContent>
                <p className="text-base sm:text-lg font-bold">283</p>
              </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                  Pedidos hoje
                </CardTitle>
                <Percent className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total de pedidos hoje
              </CardDescription>

            </CardHeader>
            <CardContent>
                <p className="text-base sm:text-lg font-bold">79</p>
              </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                  Total pedidos
                </CardTitle>
                <Package className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total pedidos em 30 dias
              </CardDescription>

            </CardHeader>
            <CardContent>
                <p className="text-base sm:text-lg font-bold">432</p>
              </CardContent>
          </Card>
        </section>

        <section className="mt-4 flex flex-col md:flex-row gap-4">
            <ChartOverview/>
            <Sales/>
        </section>
    </main>
  );
}
