import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function Sales() {
  return (
    <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                    Últimos clientes
                </CardTitle>

                <Users className="ml-auto w-4 h-4"/>
            </div>
            
            <CardDescription>
                Novos clientes nas últimas 24 horas
            </CardDescription>
        </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardofernandes777.png" />
                    <AvatarFallback>LF</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-sm sm:text-base font-semibold">Leonardo Fernandes</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">leonardo_fernandes.nunes@hotmail.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/ruanvalente.png" />
                    <AvatarFallback>RV</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-sm sm:text-base font-semibold">Ruan Valente</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">ruan.valente@gmail.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/jonathanvinicius.png" />
                    <AvatarFallback>JV</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-sm sm:text-base font-semibold">Jonathan Vinicius</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">Jonathan.vinicius@gmail.com</span>
                </div>
            </article>
        </CardContent>

    </Card>
  )
}
