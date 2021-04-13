import serve from "@generic-mmo/grpc/serve";
import Cartographer from "./service";



serve(Cartographer)
    .catch(console.error.bind(console))