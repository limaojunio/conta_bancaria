import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";

export function main() {
  let opcao: number;
  while (true) {

    console.log(colors.bg.black, colors.fg.yellow,  
                "*********************************************");
    console.log("                                             ");
    console.log("            BANCO DO BRA$IL COM $            ");
    console.log("                                             ");
    console.log("*********************************************");
    console.log("                                             ");
    console.log("       1 - Criar Conta                       ");
    console.log("       2 - Listar todas as Contas            ");
    console.log("       3 - Buscar Conta por Numero           ");
    console.log("       4 - Atualizar Dados da Conta          ");
    console.log("       5 - Apagar Conta                      ");
    console.log("       6 - Sacar                             ");
    console.log("       7 - Depositar                         ");
    console.log("       8 - Transferir valores entre Contas   ");
    console.log("       9 - Sair                              ");
    console.log("                                             ");
    console.log("*********************************************");
    console.log("                                             ",
    colors.reset);
    

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco do Bra$il com $ - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Junior Lima - ecjrcl@gmail.com");
    console.log("https://github.com/limaojunio");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
